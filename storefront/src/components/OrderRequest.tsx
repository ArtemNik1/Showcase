"use client";
import { useRef, useState, type FormEvent } from "react";
import { formatPrice } from "@/data/products";

export function OrderRequest({ name, price }: { name: string; price: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "artemaikido@gmail.com";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const customer = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    if (!customer) { setStatus("Укажите, как к вам обращаться."); return; }
    const message = `Здравствуйте!\n\nДемонстрационная заявка из каталога FORMA.\nТовар: ${name}\nЦена в примере: ${formatPrice(price)}\n\n${String(fields.get("message") || "").trim()}\n\n${customer}\nПочта для ответа: ${email}`;
    setDraft(message);
    setStatus("Письмо подготовлено. Подтвердите отправку в почтовом приложении. Если оно не открылось, скопируйте текст письма.");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(`Заявка из демо-каталога: ${name}`)}&body=${encodeURIComponent(message)}`;
  }

  async function copy() {
    try { await navigator.clipboard.writeText(draft); setStatus(`Текст скопирован. Отправьте его на ${recipient}.`); }
    catch { setStatus(`Копирование недоступно. Напишите напрямую на ${recipient}, указав название товара.`); }
  }

  return <>
    <button className="primary-button order-button" type="button" onClick={() => { setStatus(""); setDraft(""); dialog.current?.showModal(); }}>Подготовить заявку <span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="order-dialog" aria-labelledby="order-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-heading"><h2 id="order-title">Заявка на товар</h2><button className="close-button" aria-label="Закрыть заявку" type="button" onClick={() => dialog.current?.close()}>×</button></div>
      <p className="order-product">{name} · {formatPrice(price)}</p><p className="order-note" id="order-note">Это учебный каталог. Форма откроет письмо автору проекта; оплаты и реального заказа здесь нет.</p>
      <form onSubmit={submit} aria-describedby="order-note">
        <label>Ваше имя<input name="name" autoComplete="name" maxLength={120} required/></label>
        <label>Почта для ответа<input type="email" name="email" autoComplete="email" maxLength={254} required/></label>
        <label>Комментарий<textarea name="message" rows={3} maxLength={1500} placeholder="Например, вопрос о характеристиках"/></label>
        <button className="primary-button order-button" type="submit">Открыть письмо</button>
        {draft && <button className="secondary-button order-button" type="button" onClick={() => void copy()}>Скопировать текст</button>}
        <p role="status" className="form-status">{status}</p>
      </form>
    </dialog>
  </>;
}

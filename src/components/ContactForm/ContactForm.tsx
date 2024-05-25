"use client";
import {ContactFormContainer} from "@/components/ContactForm/styled.components";
import {useState} from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, message});
        Swal.fire({
            title: 'تم الإرسال!',
            text: 'لقد تم إرسال رسالتك بنجاح.',
            icon: 'success',
            confirmButtonText: 'حسناً'
        });
    };

    return (
        <ContactFormContainer onSubmit={handleSubmit}>
            <h2>🥰 تواصل معنا </h2>
            <label htmlFor="formName">إسمك</label>
            <input
                type="text"
                id="formName"
                name="name"
                value={name}
                placeholder="أدخل إسمك هنا"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="formEmail">البريد الإلكتروني</label>
            <input
                type="email"
                id="formEmail"
                name="email"
                value={email}
                placeholder="أدخل البريد الإلكتروني هنا"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="formMessage">رسالتك</label>
            <textarea
                id="formMessage"
                name="message"
                value={message}
                placeholder="ماذا يدور في بالك؟"
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit">أرسلني</button>
        </ContactFormContainer>
    );
};

export default ContactForm;

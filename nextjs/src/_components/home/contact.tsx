"use client";

import {useRef,} from 'react';
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify';
import {Textarea, Input, Button} from "@nextui-org/react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        toast.success('Envoi du message...');

        emailjs.sendForm(
            'service_g8qo7sk',
            'template_hm2sux9',
            form.current,
            'AQGKsROzickMcI_mn'
        )
            .then((result) => {
                toast.success('Coordonnées reçues avec succès !');
            }, (error) => {
                toast.error('Une erreur est survenue, veuillez réessayer.');
            });

        e.target.reset();
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md text-black">
            <h2 className="text-2xl font-bold mb-6">Contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <Input type="text" label="Prénom" name="name" required/>
                <Input type="text" label="Nom"  name="firstname" required/>
                <Input type="email" label="Email" name="email" required/>
                <Textarea name="message" label="Message"></Textarea>
                <div>
                    <Button type="submit" color="primary">Envoyer</Button>
                </div>
            </form>
        </div>
    );
}

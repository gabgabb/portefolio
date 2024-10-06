"use client";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { Textarea, Input, Button } from "@nextui-org/react";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success('Envoi du message...');

        if (form.current) {
            emailjs.sendForm(
                'service_g8qo7sk',
                'template_hm2sux9',
                form.current,
                'AQGKsROzickMcI_mn'
            )
                .then(() => {
                    toast.success('Coordonnées reçues avec succès !');
                }, () => {
                    toast.error('Une erreur est survenue, veuillez réessayer.');
                });
        }

        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="mx-auto my-10 max-w-md rounded-lg bg-white-50 p-6 text-black shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <Input type="text" label="Prénom" name="name" required />
                <Input type="text" label="Nom" name="firstname" required />
                <Input type="email" label="Email" name="email" required />
                <Textarea name="message" label="Message"></Textarea>
                <div>
                    <Button type="submit" color="primary">Envoyer</Button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
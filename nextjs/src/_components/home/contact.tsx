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
        <div className="min-h-screen bg-yellow-50">
            <h2 className="h2 pt-10 text-center !text-black">Contactez-moi</h2>
            <div className="mx-auto my-10 max-w-md rounded-lg bg-white-50 p-6 text-black shadow-md">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                    <Input className="button-tertiary" type="text" label="Prénom" name="name" required />
                    <Input className="button-tertiary"  type="text" label="Nom" name="firstname" required />
                    <Input className="button-tertiary"  type="email" label="Email" name="email" required />
                    <Textarea className="button-tertiary"  name="message" label="Message"></Textarea>
                    <Button type="submit" className="button-primary mx-auto bg-black !text-white-50 hover:bg-gray-900">Envoyer</Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
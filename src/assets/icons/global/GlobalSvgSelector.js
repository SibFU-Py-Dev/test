import React from 'react';


export const GlobalSvgSelector = ({id}) => {
    switch (id) {
        case 'icon_button':
            return (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.67982 9.17982C3.90712 8.40712 4.81883 7.14973 5.79343 7.64397L7.45466 8.4864C7.72773 8.62488 8.05045 8.62488 8.32351 8.4864L9.98474 7.64397C10.9593 7.14974 11.871 8.40712 11.0984 9.17982L8.56827 11.7099C8.19317 12.085 7.585 12.085 7.2099 11.7099L4.67982 9.17982Z" fill="white"/>
                </svg>
            );
        case 'action_plus':
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7.99999C2 7.44771 2.44772 6.99999 3 6.99999H13C13.5523 6.99999 14 7.44771 14 7.99999C14 8.55228 13.5523 8.99999 13 8.99999H3C2.44772 8.99999 2 8.55228 2 7.99999Z" fill="#12B2ED"/>
                    <path d="M7.99988 14C7.44759 14 6.99988 13.5523 6.99988 13V3C6.99988 2.44772 7.44759 2 7.99988 2C8.55216 2 8.99988 2.44772 8.99988 3V13C8.99988 13.5523 8.55216 14 7.99988 14Z" fill="#12B2ED"/>
                </svg>
            );
        case 'action_icon_button':
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.67982 8.67982C3.90712 7.90712 4.81883 6.64973 5.79343 7.14397L7.45466 7.9864C7.72773 8.12488 8.05045 8.12488 8.32351 7.9864L9.98474 7.14397C10.9593 6.64974 11.871 7.90712 11.0984 8.67982L8.56827 11.2099C8.19317 11.585 7.585 11.585 7.2099 11.2099L4.67982 8.67982Z" fill="#12B2ED"/>
                </svg>
            );
        case 'setting':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1614 13.2831C15.8762 11.5519 15.0405 9.57397 13.2949 8.86521C11.5493 8.15641 9.55493 8.98517 8.84022 10.7163C8.12552 12.4474 8.96118 14.4254 10.7067 15.1341C12.4523 15.843 14.4467 15.0142 15.1614 13.2831Z" stroke="#009FDA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8308 16.9434L21.877 17.7672C22.4308 16.8518 22.8001 15.9364 23.077 14.8379L20.4001 13.2816C20.4924 12.3661 20.4924 11.5422 20.4001 10.7184L23.077 9.07053C22.8001 8.06353 22.4308 7.05654 21.877 6.14109L18.8308 6.96499C18.277 6.23264 17.7232 5.68336 16.9847 5.13409L17.8155 2.11312C16.8924 1.56384 15.9693 1.19767 14.8616 0.923035L13.2924 3.57783C12.3693 3.48629 11.5385 3.48629 10.7078 3.57783L9.04623 1.01458C8.12316 1.28921 7.10777 1.65539 6.18469 2.20466L7.01546 5.22564C6.277 5.77491 5.72316 6.32418 5.16931 7.05654L2.12316 6.32418C1.56931 7.23963 1.20008 8.15507 0.923157 9.25362L3.60008 10.8098C3.50777 11.7253 3.50777 12.5492 3.60008 13.4647L0.923157 14.9294C1.20008 15.9364 1.56931 16.8518 2.12316 17.8588L5.16931 17.0349C5.72316 17.7672 6.277 18.3166 7.01546 18.8658L6.18469 21.8868C7.10777 22.4361 8.03085 22.8023 9.13854 23.0769L10.7078 20.4221C11.6308 20.5136 12.4616 20.5136 13.2924 20.4221L14.8616 23.0769C15.877 22.8023 16.8924 22.4361 17.8155 21.8868L16.9847 18.8658C17.7232 18.225 18.3693 17.6758 18.8308 16.9434Z" stroke="#009FDA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'message':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.27302 3C1.47864 3 0 4.43217 0 6.17391V17.8261C0 19.5678 1.47864 21 3.27302 21H20.7302C22.5246 21 24 19.5678 24 17.8261V6.17391C24 4.43217 22.5246 3 20.7302 3H3.27302ZM3.24001 5.11802H20.7643C21.0264 5.12603 21.2563 5.21408 21.4355 5.36002C18.5821 6.99219 15.7764 8.59715 12.9184 10.231C12.5516 10.4408 11.4559 10.4398 11.0859 10.231C8.24508 8.61134 5.40509 6.98485 2.56559 5.36106C2.74605 5.21456 2.9769 5.12505 3.24001 5.11802V5.11802ZM2.18203 7.598L9.97462 12.0522C11.2307 12.7703 12.7693 12.7703 14.0254 12.0522C16.6405 10.5572 19.2138 9.08756 21.8169 7.59904V17.8261C21.8169 18.4311 21.3535 18.8851 20.7302 18.8851H3.27301C2.64973 18.8851 2.18201 18.4311 2.18201 17.8261L2.18203 7.598Z" fill="white"/>
                </svg>
            );
        default:
            return null;
    }
};

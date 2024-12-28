import {
    autoDescription,
    coderousseauDescription,
    coreegoProject,
    easystemProject,
    introductionText,
    labonneplaceProject,
    lesmathesProject, mediapiloteDescription,
    vitrineProject
} from "@/libs/translateText.js";

export default {
    locale: localStorage.getItem("lang") || 'fr',
    fallbackLocale: 'fr',
    messages: {
        fr: {
            lang: 'Français',
            navigation: {
                about: 'à propos',
                skills: "compétences",
                education: 'éducations',
                experience: 'Expériences',
                portfolio: 'Portfolio',
                pricing: 'Prix',
                contact: 'Contactez moi'
            },
            about:{
                hello: 'Bonjour',
                welcomename: 'Je suis Yoann PIARD',
                occupation: 'Développeur web',
                age: "Âge",
                nationality: {
                    label: "Nationnalité",
                    value: "Française"
                },
                email: "E-mail",
                phone: "Téléphone",
                availiblestatus: "Statut de disponibilité",
                downloadResume: "Télécharger le CV",
                introduction: introductionText.fr
            },
            skills: "Compétences professionnelles",
            projects:{
                coreego:{
                    title: "Platforme communautaire COREEGO",
                    description: coreegoProject.fr
                },
                easysystem:{
                    title: "Planning de prise de rendez-vous",
                    description: easystemProject.fr
                },
                vitrinenumerique:{
                    title: "Vitrine numérique",
                    description: vitrineProject.fr
                },
                lesmathes: {
                    title: "Mairie les mathes | la Palmyre",
                    description: lesmathesProject.fr
                },
                labonneplace:{
                    title: "La bonne Place",
                    description: labonneplaceProject.fr
                }
            },
            experience: "Expériences professionnelles",
            experiences: {
                one:{
                    date: 'Mai 2022 - Mai 2023',
                    occupation: 'Développeur web Frontend',
                    company: 'codes rousseau',
                    description: coderousseauDescription.fr
                },
                two:{
                    date: 'Février 2021 - Février 2022',
                    occupation: 'Développeur PHP Wordpress',
                    company: 'médiapilote',
                    description: mediapiloteDescription.fr
                },
                three:{
                    date: '2021 - Actuellement',
                    occupation: 'Auto-entrepreneur dans le developpement web',
                    company: '',
                    description: autoDescription.fr
                },
            },
            education: "Formations professionnelles",
            educations:{
                one: {
                    date: 'Novembre 2023 - Mai 2024',
                    name: 'Concepteur Développeur d’Application (Bac+3)',
                    company: 'Arinfo - La Roche Sur Yon'
                },
                two: {
                    date: 'Février 2021 - Février 2022',
                    name: 'Développeur Web et Web Mobile (Bac+2)',
                    company: 'Arinfo - Niort'
                }
            },
            year: 'an',
            day: 'jour',
            employee: 'employé',
            freelancer: 'freelance'
        },
        en: {
            lang: 'English',
            navigation: {
                about: 'About',
                skills: "skills",
                education: 'Educations',
                experience: 'Experiences',
                pricing: 'Pricing',
                portfolio: 'Portfolio',
                contact: 'Contact me'
            },
            about:{
                hello: 'Hello',
                welcomename: "I'm Yoann PIARD",
                occupation: 'Web developer',
                age: "Age",
                nationality: {
                    label: "Nationality",
                    value: "French"
                },
                localisation: "Location",
                email: "Email",
                phone: "Phone",
                availiblestatus: "Availability Status",
                downloadResume: "Download resume",
                introduction: introductionText.en
            },
            skills: "Professional Skills",
            projects:{
                coreego:{
                    title: "Community Platform COREEGO",
                    description: coreegoProject.en
                },
                easysystem:{
                    title: "Appointment Scheduling",
                    description: easystemProject.en
                },
                vitrinenumerique:{
                    title: "Digital Showcase",
                    description: vitrineProject.en
                },
                lesmathes: {
                    title: "City of Les Mathes | La Palmyre",
                    description: lesmathesProject.en
                },
                labonneplace:{
                    title: "La bonne Place",
                    description: labonneplaceProject.en
                }
            },
            experience: "Work experience",
            experiences: {
                one:{
                    date: 'May 2022 - May 2023',
                    occupation: 'Frontend web developer',
                    company: 'codes rousseau',
                    description: coderousseauDescription.en
                },
                two:{
                    date: 'Fabruary 2021 - Fabruary 2022',
                    occupation: 'PHP Wordpress Developer',
                    company: 'médiapilote',
                    description: mediapiloteDescription.en
                },
                three:{
                    date: '2021 - Present',
                    occupation: 'Self-employed in web development',
                    company: '',
                    description: autoDescription.en
                },
            },
            education: "Education",
            educations:{
                one: {
                    date: 'November 2023 - May 2024',
                    name: "Bachelor's degree in Application Development and Design",
                    company: 'Arinfo - La Roche Sur Yon'
                },
                two: {
                    date: 'February 2021 - February 2022',
                    name: 'Associate degree in Web and Mobile Web Development',
                    company: 'Arinfo - Niort'
                }
            },
            year: 'year',
            day: 'day',
            employee: 'employee',
            freelancer: 'freelancer'
        },
    }
}
'use strict';

const cardsData = [
    {
        category: "Learning",
        date: "2023-12-21",
        dateText: "Published 21 Dec 2023",
        title: "HTML & CSS foundations",
        description: "These languages are the backbone of every website, defining structure, content, and presentation.",
        author: "Greg Hooper",
        image: "assets/images/undraw_performance-comparison_qd1q.svg",
        avatar: "assets/images/userpic.svg",
        featured: false,
    },
    {
        category: "Design",
        date: "2024-02-14",
        dateText: "Published 14 Feb 2024",
        title: "UI Design Principles",
        description: "Learn the fundamentals of visual hierarchy, spacing, and balance to create cleaner interfaces.",
        author: "Emily Carter",
        image: "assets/images/undraw_cli-coding-agent_jtq1.svg",
        avatar: "assets/images/129-wear-mask.svg",
        featured: true,
    },
    {
        category: "JavaScript",
        date: "2024-03-02",
        dateText: "Published 2 Mar 2024",
        title: "DOM Manipulation Basics",
        description: "Understand how to select, update, and interact with elements using modern JavaScript.",
        author: "Michael Reed",
        image: "assets/images/undraw_system-update_gekm.svg",
        avatar: "assets/images/127-sick-sneezing.svg",
        featured: false,
    },
];

const container = document.querySelector('.container');
function renderCards(cards) {
    container.innerHTML = cards
        .map(card => `
            <article class= "card ${card.featured ? "card--featured" : ""}">
        <div class= "card__image" >
                    <img src="${card.image}" alt="${card.title}">
                </div>
                <div class="card__content">
                    <div class="card__header">
                        <span class="alert">${card.category}</span>
                        <time datetime="${card.date}" class="card__date">
                            ${card.dateText}
                        </time>
                        <h2 class="card__title">
                            ${card.title}
                        </h2>
                        <p class="card__description">${card.description}</p>
                    </div>
                    <div class="card__footer">
                        <img class="userpic" src="${card.avatar}" alt="${card.author}">
                        <p class="card__author">${card.author}</p>
                    </div>
                </div>
            </article >
            `
        )
        .join("");
}
renderCards(cardsData);
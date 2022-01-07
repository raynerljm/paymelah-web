## PayMeLah

This Web App is created to be used with the Telegram Bot @PayMeLahBot for Hack&Roll 2022

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The Solution

Do visit our Telegram Bot and Web App to try it out yourself! 🥺

[Telegram Bot](https://t.me/PayMeLahBot)

[Web App](https://paymelah.vercel.app/)

_Note: Directly accessing the web app brings you to our **beautiful** landing page. However, in order to use the web app for splitting the bill, do first use the Telegram Bot. After receiving an image of your receipt, the Telegram Bot will send a link to redirect you to the web app to begin splitting your bill!_

## The Problem

Have you ever gone out with friends for supper (_at supper stretch?_) and found yourself paying for the bill first?

Then you should be familiar with the struggles that those who pay first face. Not only do you have to stand in line, keep the receipt and send the receipt on the group chat, but you still have to figure out which item was ordered by who, calculate how much they have to pay you, sometimes calculate GST and service charge, and then repeatedly chase those who just refuse to pay you on time. 😡

As those who pay first, why should this burden befall our shoulders? As such, we created PayMeLah, a solution to help make the lives of these good samaritans a tad bit easier. ✨

## The User Flow

1. Users can directly interact with @PayMeLahBot or add it into a group chat.
2. The user can then upload an image of a receipt.
3. After a few seconds, the bot will send a link to our web app to start splitting their bill.
4. The web app will initially contain any receipt items picked up by the OCR API as well as the user who sent the image
5. The user can add, remove, or edit the name and price of receipt items.
6. The user can also add, remove, or edit people with who the bill will be split.
7. Next, the user will be shown each receipt item one by one and the user can select which person(s) will be paying for each item. (If an item is shared between multiple people, the price will be equally divided between them)
8. Finally, the user will be shown a summary page with all the items that each person will be paying for and their total values.
9. The user can input the phone number of the person who paid as well as payment options that they receive (PayLah!, PayNow, and/or Google Pay).
10. Upon clicking confirm, the Telegram bot will send the details of the split bill to the chat where the receipt was initially sent. The user can then easily forward this message those sharing the bill as necessary.
11. Profit!!! 🤷🏻‍♂️

## The Tech Stack

Our solution is comprised of two major components:

### The Telegram Bot

1. We decided to integrate a Telegram bot into our solution because after conducting some user interviews, we realized that a standalone web app that users have to search for every time they have to split a bill might be more troublesome than the convenience it brings. Among the youths these days, Telegram is the primary way of communication and as such, it is extremely easy to add our @PayMeLahBot into your group chats or just directly interact with it to split a bill. 🐥

⚙️ Technologies used: **Python-Telegram-Bot Library**, **TabScanner OCR Computer Vision API**, **Heroku for hosting**

### The Web App

2. However, a standalone Telegram bot also does not have the flexibility, responsiveness, and aesthetic appeal that a web app can bring. As such, we decided to move the functionality of bill splitting to the web app for the best user experience. For data and personal privacy reasons, we decided not to use a backend and database to store the receipt items. As such, these details are embedded in the URL and all the bill splitting is purely on the client-side. This means you can rest assured knowing that your data is safe and secure! 🧞‍♂️

⚙️ Technologies used: **Next.js**, **Tailwind CSS**, **TypeScript**, **Vercel for hosting**

## The Challenges

One of the biggest challenges was to think of a unique selling point (USP) for our solution. There are many attempts at solving this problem out in the market, whether in the form of a Telegram bot, mobile app, or web app. As such, thinking of a way to set apart our solution while making the solution's UX the best we can was a difficult task. Safe to say, we are very pleased with how our solution turned out and we hope that you can give it a try!

On the Telegram bot side, as we have never sent an image file to an API endpoint before, it was something we struggled with and it took us a while before we figured out how to make it work. On the Web app side, as there is a LOT of different states being manipulated and altered with every button click, it was tough to find a clean and effective way to manage the state and objects without it producing unintended results (especially without a state management library). However, with a lot of testing and fine-tuning, we managed to achieve a satisfactory result that works!

## The Accomplishments and Lessons Learnt

One of the most interesting things we learnt was learning how to pass a sizeable amount of data (eg. a JSON object) through the URL so as to keep the data client-sided. We stringified the JSON object and then encoded it in Base 64 on the Telegram bot side and then retrieved the code from the URL, decoded it and then parsed it into a JSON object to set up the initial receipt items.

In our previous hackathons, we only created web apps that were aesthetic and usable on desktops and laptops and not on mobile. However, this time we are proud to say that the website is fully responsive on any screen size! As the most common use case would be opening the web app from the Telegram mobile app, it was really important to us that the web app is not just functional but aesthetic on mobile screens.

## What's next for PayMeLah

There is definitely so much more that PayMeLah can bring to the table than what we have shown here! Here are a few of our plans for it:

### Multiple Receipt Parsing

What could possibly be worse than splitting a bill? Splitting MULTIPLE bills. Imagine hanging out with your friends for an entire day, wracking up multiple receipts that require splitting... What an absolute pain. Hence, we plan to allow users to submit multiple receipts to be parsed at one go, allowing for large-scale bill splitting to be carried out quicker than ever!

### Debt Cancellation

Sometimes, things can get really confusing when different people pay for different items. This would normally result in the whipping out of the Calculator, the Notes app, and one scapegoat to do all the calculations. Not with PayMeLah! With the introduction of the Multiple Receipt Parsing, PayMeLah can then simply take note of the user that paid for the transaction, followed by some clever computing, and voila~ no more poor calculator-notes-app-scapegoat!

### Collection Reminder

As each day passes, uncollected debt could mean cash left uninvested in the latest Meme-coin. Often, debt collections are left forgotten, never to be settled. Well, not on PayMeLah's watch! By simply adding PayMeLahBot into the telegram group with your friends and setting an appropriate timer, we wish to allow users to remind their friends to pay back their debts. Annoying? Possibly. Effective? Definitely.

### Securing Funding

If we would like PayMeLah to stay up for a long time, securing some form of funding or monetization is pertinent. We are currently on a free trial with limited credits to have access to TabScanner's OCR API which is what we use to help streamline the bill splitting process. Hopefully, we can find a means to do so and so that PayMeLah can continuously grow to help more and more good samaritans efficiently split their bills.

We have big dreams and are extremely excited for the difference that PayMeLah can make in our day-to-day lives. More importantly, we hope that you are excited for them too! So follow and support us as we go on this journey of reminding our friends and family to "Pls Pay Me Lah"!

const things = [
  {
    image: '<img src="./images/tele.svg"> ',
    heading: "Digital Products",
    desc: "Sell any and every kind of digital product, from content packs to designs to bundles and more without stress.",
  },
  {
    image: '<img src="./images/eee.svg"> ',
    heading: "Ebooks",
    desc: "Selar is the best platform to sell your ebooks both downloadable and non-downloadable in any format.",
  },
  {
    image: '<img src="./images/book.svg"> ',
    heading: "Courses and Membership",
    desc: "You can host your courses & membership sites with unlimited videos & files, unlimited storage, and have unlimited students, plus you get content security to prevent theft.",
  },
  {
    image: '<img src="./images/side.svg"> ',
    heading: "Event Tickets and Training",
    desc: "Sell tickets for all kinds of events and access to masterclasses, events, workshops, training, webinars, and even more.",
  },
  {
    image: '<img src="./images/star.svg"> ',
    heading: "Services",
    desc: "Sell any kind of service, from coaching services to consultations to counseling sessions to design services and more.",
  },
  {
    image: '<img src="./images/box.svg"> ',
    heading: "Physical Goods",
    desc: "You can also use Selar to sell your physical product from clothing to books to electronics and appliances and more.",
  },
];

let products = things
  .map(
    (item) => `
      <div>
          <p>${item.image}</P>
          <h3>${item.heading}</h3>
          <p>${item.desc}</p>
      
      </div>
      `
  )
  .join("");
document.getElementById("demo").innerHTML = products;

const pupil = [
  {
    image: '<img src="./images/affilate.svg" alt=""> ',
    heading: "Affiliates",
    desc: "Set up your own affiliate marketing system, and give a commission for anyone that facilitates a sale for your store.",
    link: '<a href="#" >Learn More</a>',
  },

  {
    image: '<img src="./images/master.svg" alt=""> ',
    heading: "Sales Page",
    desc: "Create custom sales/landing pages for your products. Descriptive sales pages drive more conversions.",
    link: '<a href="#" >Learn More</a>',
  },

  {
    image: '<img src="./images/automate.svg" alt=""> ',
    heading: "Automated Follow-ups",
    desc: "Never miss a prospective buyer with Selar's automated follow ups. Proven to drive conversions by at least 30%.",
    link: '<a href="#" >Learn More</a>',
  },
];

let right = pupil
  .map(
    (item) => `
    <div class="tools-class">
    
    <div class=item>
    <p>${item.image}</P>
    <h2>${item.heading}</h2>
    <p>${item.desc}</p>
    <p>${item.link}</p>
    </div>
  
  `
  )
  .join("");
document.getElementById("tools").innerHTML = right;



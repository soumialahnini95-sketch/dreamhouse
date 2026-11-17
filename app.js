/* Numéro fourni par l’agence, au format international sans + ni espaces. */
const WHATSAPP_NUMBER = "212772680839";
const PHONE_DISPLAY = "07 72 68 08 39";
const AGENCY_CITY = "Marrakech";
const asset = name => `./assets/${name}`;
const frameFiles = Array.from(
  { length: 35 },
  (_, index) => `frames/frame-${String(index + 1).padStart(3, "0")}.webp`
);

const text = {
  fr: {
    navListings: "Les biens",
    navWhy: "Notre approche",
    navReviews: "Témoignages",
    navContact: "Contact",
    heroEyebrow: "Immobilier de prestige · Maroc",
    heroTitle: "Trouvez la propriété<br>de vos <em>rêves</em><br>au Maroc.",
    heroText:
      "Des adresses choisies avec soin, et un accompagnement attentif à chaque étape de votre projet.",
    heroBrowse: "Voir les biens",
    heroWhatsApp: "Nous contacter sur WhatsApp",
    demoCity: "Ville de démonstration : Marrakech",
    scroll: "Défiler pour découvrir",
    introQuote:
      "Du premier échange aux clés en main, nous ouvrons la bonne porte.",
    storyEyebrow: "L’art de trouver juste",
    storyTitle: "Une adresse.<br>Une histoire.<br>La vôtre.",
    storyText:
      "Du premier échange aux clés en main, nous ouvrons la bonne porte.",
    storyOne: "Emplacements premium",
    storyTwo: "Visites sur rendez-vous",
    storyThree: "Accompagnement de A à Z",
    propertiesEyebrow: "Sélection Dream House",
    propertiesTitle: "Des lieux rares,<br>choisis pour vous.",
    propertiesText:
      "Villas, riads et appartements singuliers aux quatre coins du Maroc.",
    filterTitle: "Votre prochaine adresse",
    cityLabel: "Ville",
    typeLabel: "Type de bien",
    budgetLabel: "Budget maximum",
    projectLabel: "Projet",
    allCities: "Toutes les villes",
    allTypes: "Tous les biens",
    allBudgets: "Tous les budgets",
    allDeals: "Achat ou location",
    villa: "Villa",
    apartment: "Appartement",
    land: "Terrain",
    riad: "Riad",
    buy: "Achat",
    rent: "Location",
    search: "Rechercher",
    reset: "Effacer les filtres",
    bedrooms: "chambres",
    baths: "salles de bains",
    details: "Voir le détail",
    demoNote:
      "Annonces et prix de démonstration, non vérifiés. L’effet 3D est une animation des photos 2D, pas une visite réelle.",
    noResults: "Aucun bien ne correspond à ces critères.",
    whyEyebrow: "La différence Dream House",
    whyTitle: "Un regard local.<br>Une attention entière.",
    whyText:
      "Chaque projet mérite de la clarté, du temps et les bons interlocuteurs.",
    whyOne: "Expertise locale",
    whyOneText: "Une connaissance fine des quartiers et du marché marocain.",
    whyTwo: "Accompagnement juridique",
    whyTwoText: "Des repères clairs et les bons professionnels à chaque étape.",
    whyThree: "MRE & acheteurs internationaux",
    whyThreeText: "Un accompagnement à distance, pensé pour vos démarches.",
    whyFour: "Présents après les clés",
    whyFourText: "Un suivi attentif pour faciliter votre installation.",
    reviewEyebrow: "Ils nous font confiance",
    reviewTitle: "L’essentiel, c’est la rencontre.",
    reviewNote:
      "Six emplacements d’avis de démonstration — à remplacer par des retours clients vérifiés.",
    reviewAuthor: "Avis à renseigner",
    reviewRole: "Témoignage de démonstration",
    contactEyebrow: "Parlons de votre projet",
    contactTitle: "La bonne adresse commence par une conversation.",
    contactText:
      "Dites-nous ce que vous recherchez. Nous reviendrons vers vous avec attention.",
    name: "Votre nom",
    phone: "Téléphone",
    email: "E-mail",
    message: "Votre message",
    send: "Envoyer ma demande",
    formNote:
      "Formulaire de démonstration : l’envoi ouvre WhatsApp sur la ligne de l’agence.",
    phoneNote: "Appeler Dream House au 07 72 68 08 39.",
    address: "Adresse",
    addressSetup: "Adresse de l’agence à renseigner",
    hours: "Horaires",
    hoursSetup: "Horaires à confirmer",
    mapNote: "Marrakech, Maroc · emplacement exact à préciser.",
    footerLine: "Le Maroc vous va si bien.",
    rights: "Tous droits réservés.",
    footerNote:
      "Adresse, horaires, avis et annonces d’exemple à confirmer avant publication.",
    floating: "Écrire sur WhatsApp",
    detailNote: "Annonce illustrative à confirmer auprès de l’agence.",
    requestVisit: "Demander une visite",
    close: "Fermer",
    count: "biens",
    previous: "Avis précédent",
    next: "Avis suivant",
    reviews: [
      "« À compléter avec un retour client vérifié sur la qualité de l’accompagnement. »",
      "« Ajoutez ici l’expérience réelle d’un acheteur ou d’un vendeur accompagné. »",
      "« Remplacez cet exemple par un avis client publié avec son accord. »",
      "« À compléter avec un avis vérifié sur la qualité des visites proposées. »",
      "« Ajoutez un retour client réel sur le suivi de son dossier. »",
      "« Remplacez par l’expérience d’un acheteur ou locataire, avec son accord. »",
    ],
  },
  en: {
    navListings: "Properties",
    navWhy: "Our approach",
    navReviews: "Testimonials",
    navContact: "Contact",
    heroEyebrow: "Exceptional real estate · Morocco",
    heroTitle: "Find the property<br>of your <em>dreams</em><br>in Morocco.",
    heroText:
      "Considered addresses, thoughtfully selected, with attentive support at every step of your journey.",
    heroBrowse: "Explore properties",
    heroWhatsApp: "Contact us on WhatsApp",
    demoCity: "Demo city: Marrakech",
    scroll: "Scroll to discover",
    introQuote:
      "From your first conversation to the keys in hand, we open the right door.",
    storyEyebrow: "The art of finding the right place",
    storyTitle: "An address.<br>A story.<br>Yours.",
    storyText:
      "From your first conversation to the keys in hand, we open the right door.",
    storyOne: "Premium locations",
    storyTwo: "Private viewings",
    storyThree: "Support from start to finish",
    propertiesEyebrow: "The Dream House selection",
    propertiesTitle: "Rare places,<br>chosen for you.",
    propertiesText: "Distinctive villas, riads and apartments across Morocco.",
    filterTitle: "Your next address",
    cityLabel: "City",
    typeLabel: "Property type",
    budgetLabel: "Maximum budget",
    projectLabel: "Your plans",
    allCities: "All cities",
    allTypes: "All properties",
    allBudgets: "Any budget",
    allDeals: "Buy or rent",
    villa: "Villa",
    apartment: "Apartment",
    land: "Land",
    riad: "Riad",
    buy: "Buy",
    rent: "Rent",
    search: "Search",
    reset: "Clear filters",
    bedrooms: "bedrooms",
    baths: "bathrooms",
    details: "View details",
    demoNote:
      "Demo listings and prices, not verified. The 3D effect animates 2D photos; it is not a real virtual tour.",
    noResults: "No properties match these filters.",
    whyEyebrow: "The Dream House difference",
    whyTitle: "Local perspective.<br>Personal attention.",
    whyText:
      "Every project deserves clarity, time and the right people around you.",
    whyOne: "Local expertise",
    whyOneText: "In-depth knowledge of neighbourhoods and the Moroccan market.",
    whyTwo: "Legal guidance",
    whyTwoText: "Clear guidance and trusted professionals at each step.",
    whyThree: "MRE & international buyers",
    whyThreeText: "Remote assistance designed around your cross-border plans.",
    whyFour: "Here after the keys",
    whyFourText: "Considered follow-through to make settling in easier.",
    reviewEyebrow: "A relationship built on trust",
    reviewTitle: "It begins with the right connection.",
    reviewNote:
      "Six sample review slots — replace them with verified client feedback before publishing.",
    reviewAuthor: "Review to be added",
    reviewRole: "Demonstration testimonial",
    contactEyebrow: "Let’s talk about your plans",
    contactTitle: "The right address starts with a conversation.",
    contactText:
      "Tell us what you are looking for. We will get back to you thoughtfully.",
    name: "Your name",
    phone: "Phone",
    email: "Email",
    message: "Your message",
    send: "Send my enquiry",
    formNote:
      "Demo form: submission opens WhatsApp on the agency’s direct line.",
    phoneNote: "Call Dream House on +212 772 680 839.",
    address: "Address",
    addressSetup: "Agency address to be added",
    hours: "Opening hours",
    hoursSetup: "Hours to be confirmed",
    mapNote: "Marrakech, Morocco · exact location to be added.",
    footerLine: "Morocco, a place to call yours.",
    rights: "All rights reserved.",
    footerNote:
      "Address, hours, sample reviews and listings must be confirmed before publishing.",
    floating: "Message us on WhatsApp",
    detailNote: "Illustrative listing. Please confirm details with the agency.",
    requestVisit: "Request a viewing",
    close: "Close",
    count: "properties",
    previous: "Previous review",
    next: "Next review",
    reviews: [
      "“Add a verified client’s feedback about the quality of the support here.”",
      "“Add the real experience of a buyer or seller who has worked with the agency.”",
      "“Replace this sample with a review published with the client’s permission.”",
      "“Add a verified review about the quality of the viewings.”",
      "“Add genuine client feedback about the support throughout their case.”",
      "“Replace this prompt with a buyer’s or tenant’s review, with their consent.”",
    ],
  },
  ar: {
    navListings: "العقارات",
    navWhy: "منهجنا",
    navReviews: "آراء العملاء",
    navContact: "اتصل بنا",
    heroEyebrow: "عقارات راقية · المغرب",
    heroTitle: "اعثر على عقار<br><em>أحلامك</em><br>في المغرب.",
    heroText: "عناوين مختارة بعناية ومرافقة شخصية في كل مرحلة من مشروعك.",
    heroBrowse: "اكتشف العقارات",
    heroWhatsApp: "تواصل معنا عبر واتساب",
    demoCity: "مدينة العرض: مراكش",
    scroll: "مرّر لاكتشاف المزيد",
    introQuote:
      "من أول حديث حتى استلام المفاتيح، نساعدك على فتح الباب المناسب.",
    storyEyebrow: "فن اختيار المكان المناسب",
    storyTitle: "عنوان.<br>حكاية.<br>حكايتك.",
    storyText: "من أول حديث حتى استلام المفاتيح، نساعدك على فتح الباب المناسب.",
    storyOne: "مواقع متميزة",
    storyTwo: "زيارات بموعد مسبق",
    storyThree: "مرافقة من البداية إلى النهاية",
    propertiesEyebrow: "اختيارات دريم هاوس",
    propertiesTitle: "أماكن استثنائية،<br>مختارة لك.",
    propertiesText: "فلل ورياض وشقق مميزة في مختلف أنحاء المغرب.",
    filterTitle: "عنوانك القادم",
    cityLabel: "المدينة",
    typeLabel: "نوع العقار",
    budgetLabel: "الميزانية القصوى",
    projectLabel: "نوع الطلب",
    allCities: "كل المدن",
    allTypes: "كل العقارات",
    allBudgets: "كل الميزانيات",
    allDeals: "شراء أو كراء",
    villa: "فيلا",
    apartment: "شقة",
    land: "أرض",
    riad: "رياض",
    buy: "شراء",
    rent: "كراء",
    search: "بحث",
    reset: "مسح عوامل التصفية",
    bedrooms: "غرف نوم",
    baths: "حمّامات",
    details: "التفاصيل",
    demoNote:
      "عقارات وأسعار تجريبية غير موثقة. تأثير العمق يحرك صوراً ثنائية الأبعاد ولا يمثل جولة افتراضية حقيقية.",
    noResults: "لا توجد عقارات تطابق هذه المعايير.",
    whyEyebrow: "ما يميز دريم هاوس",
    whyTitle: "خبرة محلية.<br>عناية شخصية.",
    whyText: "كل مشروع يحتاج إلى الوضوح والوقت والأشخاص المناسبين.",
    whyOne: "خبرة محلية",
    whyOneText: "معرفة دقيقة بالأحياء والسوق العقاري المغربي.",
    whyTwo: "مواكبة قانونية",
    whyTwoText: "إرشادات واضحة ومتخصصون مناسبون في كل مرحلة.",
    whyThree: "مغاربة العالم والمشترون الدوليون",
    whyThreeText: "مواكبة عن بُعد تراعي إجراءاتك عبر الحدود.",
    whyFour: "معك بعد استلام المفاتيح",
    whyFourText: "متابعة تساعدك على الاستقرار بسهولة.",
    reviewEyebrow: "الثقة أساس علاقتنا",
    reviewTitle: "كل شيء يبدأ بلقاء مناسب.",
    reviewNote:
      "ستة أماكن لآراء تجريبية — يرجى استبدالها بآراء موثقة قبل النشر.",
    reviewAuthor: "رأي بحاجة إلى إضافة",
    reviewRole: "رأي تجريبي",
    contactEyebrow: "لنتحدث عن مشروعك",
    contactTitle: "العنوان المناسب يبدأ بمحادثة.",
    contactText: "أخبرنا عمّا تبحث عنه وسنعود إليك بكل اهتمام.",
    name: "الاسم الكامل",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    message: "رسالتك",
    send: "إرسال الطلب",
    formNote: "نموذج تجريبي: الإرسال يفتح واتساب على رقم الوكالة المباشر.",
    phoneNote: "اتصل بدريم هاوس على ‎+212 772 680 839.",
    address: "العنوان",
    addressSetup: "يرجى إضافة عنوان الوكالة",
    hours: "ساعات العمل",
    hoursSetup: "يرجى تأكيد ساعات العمل",
    mapNote: "مراكش، المغرب · يرجى تحديد الموقع الدقيق.",
    footerLine: "المغرب... مكانك الذي يشبهك.",
    rights: "جميع الحقوق محفوظة.",
    footerNote: "يرجى تأكيد العنوان وساعات العمل والآراء والعقارات قبل النشر.",
    floating: "راسلنا عبر واتساب",
    detailNote: "إعلان توضيحي. يرجى تأكيد التفاصيل مع الوكالة.",
    requestVisit: "طلب زيارة",
    close: "إغلاق",
    count: "عقارات",
    previous: "الرأي السابق",
    next: "الرأي التالي",
    reviews: [
      "«أضف هنا رأياً موثقاً حول جودة المواكبة.»",
      "«أضف تجربة حقيقية لمشترٍ أو بائع تعامل مع الوكالة.»",
      "«استبدل هذا المثال برأي منشور بموافقة صاحبه.»",
      "«أضف رأياً موثقاً حول جودة الزيارات المقترحة.»",
      "«أضف ملاحظات حقيقية من عميل حول متابعة ملفه.»",
      "«استبدل هذا النص بتجربة مشترٍ أو مستأجر بعد موافقته.»",
    ],
  },
};
const cityNames = {
  fr: {
    Marrakech: "Marrakech",
    Casablanca: "Casablanca",
    Rabat: "Rabat",
    Tanger: "Tanger",
  },
  en: {
    Marrakech: "Marrakech",
    Casablanca: "Casablanca",
    Rabat: "Rabat",
    Tanger: "Tangier",
  },
  ar: {
    Marrakech: "مراكش",
    Casablanca: "الدار البيضاء",
    Rabat: "الرباط",
    Tanger: "طنجة",
  },
};
let language = "fr";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function waUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function updatePhoneLink() {
  const link = $("#agencyPhone");
  if (!link) return;
  link.href = `tel:+${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
  $("span", link).textContent = PHONE_DISPLAY;
}
function reviewCountLabel(index, count) {
  return `${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
}
function updateWhatsApp() {
  const msg = {
    fr: "Bonjour Dream House, je souhaite parler de mon projet immobilier au Maroc.",
    en: "Hello Dream House, I would like to discuss my property plans in Morocco.",
    ar: "مرحباً دريم هاوس، أود التحدث عن مشروعي العقاري في المغرب.",
  }[language];
  $$(".whatsapp-link").forEach(link => {
    link.href = waUrl(msg);
  });
}
function renderLanguage(next) {
  language = next;
  const t = text[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title =
    language === "fr"
      ? "Dream House — Immobilier de prestige au Maroc"
      : language === "en"
        ? "Dream House — Exceptional Real Estate in Morocco"
        : "دريم هاوس — عقارات راقية في المغرب";
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t.heroText;
  $$("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (t[key] !== undefined) node.innerHTML = t[key];
  });
  $$("[data-placeholder-fr]").forEach(node => {
    node.placeholder =
      node.dataset[
        `placeholder${language[0].toUpperCase()}${language.slice(1)}`
      ] || node.dataset.placeholderFr;
  });
  $$("[data-lang]").forEach(button =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === language)
    )
  );
  $$(".property-card").forEach(card => {
    const city = card.dataset.city;
    const label = $("[data-city-label]", card);
    if (label) label.textContent = cityNames[language][city];
    const deal = $("[data-deal-label]", card);
    if (deal) deal.textContent = t[card.dataset.deal];
    const tag = $(".tag", card);
    if (tag) {
      const key = card.dataset.kind;
      tag.textContent = t[key] || key;
    }
  });
  $("#mapNote").textContent = t.mapNote;
  $("#storyStepCount").innerHTML = `0${activeStory + 1} <b>/</b> 03`;
  $("#reviewText").textContent = t.reviews[reviewIndex];
  $("#reviewCount").textContent = reviewCountLabel(
    reviewIndex,
    t.reviews.length
  );
  $("#reviewPrev").setAttribute("aria-label", t.previous);
  $("#reviewNext").setAttribute("aria-label", t.next);
  updateWhatsApp();
  updatePhoneLink();
  applyFilters();
}
$$("[data-lang]").forEach(button =>
  button.addEventListener("click", () => renderLanguage(button.dataset.lang))
);

const header = $(".header");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("stuck", window.scrollY > 35),
  { passive: true }
);
const nav = $("#mainNav"),
  menuToggle = $("#menuToggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
$$(".nav a").forEach(link =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

const cards = $$(".property-card");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
if (!reduceMotion)
  cards.forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
    });
    const reset = () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };
    card.addEventListener("pointerleave", reset);
    card.addEventListener("blur", reset, true);
  });

const filterForm = $("#filterForm");
function applyFilters() {
  const city = $("#cityFilter").value,
    kind = $("#typeFilter").value,
    deal = $("#dealFilter").value,
    budget = $("#budgetFilter").value;
  let count = 0;
  cards.forEach(card => {
    const visible =
      (city === "all" || card.dataset.city === city) &&
      (kind === "all" || card.dataset.kind === kind) &&
      (deal === "all" || card.dataset.deal === deal) &&
      (budget === "all" || Number(card.dataset.price) <= Number(budget));
    card.hidden = !visible;
    if (visible) count++;
  });
  $("#resultCount").textContent = `${count} ${text[language].count}`;
  $("#noResults").hidden = count !== 0;
}
filterForm.addEventListener("submit", event => {
  event.preventDefault();
  applyFilters();
  $("#properties").scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
  });
});
$("#resetFilters").addEventListener("click", () => {
  filterForm.reset();
  applyFilters();
});

const dialog = $("#propertyDialog");
cards.forEach(card => {
  const open = () => {
    const image = $("#dialogImage");
    if (card.dataset.img) {
      image.src = card.dataset.img;
      image.hidden = false;
    } else {
      image.removeAttribute("src");
      image.hidden = true;
    }
    $("#dialogTitle").textContent = card.dataset.name;
    $("#dialogLocation").textContent =
      `${cityNames[language][card.dataset.city]} · ${card.dataset.kind === "apartment" ? text[language].apartment : card.dataset.kind === "villa" ? text[language].villa : card.dataset.kind === "land" ? text[language].land : text[language].riad}`;
    $("#dialogPrice").textContent = $("[data-price-display]", card).textContent;
    activePassportCard = card;
    renderPassport(card);
    dialog.showModal();
  };
  $("[data-detail]", card).addEventListener("click", open);
  card.addEventListener("keydown", event => {
    if ((event.key === "Enter" || event.key === " ") && event.target === card) {
      event.preventDefault();
      open();
    }
  });
});
$(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

let reviewIndex = 0;
const reviewDots = $("#reviewDots");
function showReview(index) {
  reviewIndex =
    (index + text[language].reviews.length) % text[language].reviews.length;
  $("#reviewText").textContent = text[language].reviews[reviewIndex];
  $("#reviewCount").textContent = reviewCountLabel(
    reviewIndex,
    text[language].reviews.length
  );
  $$("button", reviewDots).forEach((button, i) =>
    button.classList.toggle("active", i === reviewIndex)
  );
}
for (let i = 0; i < text.fr.reviews.length; i++) {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `${i + 1} / ${text.fr.reviews.length}`);
  dot.addEventListener("click", () => showReview(i));
  reviewDots.append(dot);
}
$("#reviewPrev").addEventListener("click", () => showReview(reviewIndex - 1));
$("#reviewNext").addEventListener("click", () => showReview(reviewIndex + 1));

$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const copy = {
    fr: {
      greeting: "Bonjour Dream House,",
      name: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      message: "Projet",
    },
    en: {
      greeting: "Hello Dream House,",
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Project",
    },
    ar: {
      greeting: "مرحباً دريم هاوس،",
      name: "الاسم",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      message: "المشروع",
    },
  }[language];
  const msg = [
    copy.greeting,
    `${copy.name}: ${form.get("name")}`,
    `${copy.phone}: ${form.get("phone")}`,
    `${copy.email}: ${form.get("email")}`,
    `${copy.message}: ${form.get("message")}`,
  ].join("\n");
  window.open(waUrl(msg), "_blank", "noopener,noreferrer");
});

let activeStory = 0;
const story = $(".story"),
  canvas = $("#storyCanvas"),
  ctx = canvas.getContext("2d", { alpha: false }),
  progressBar = $("#storyProgress"),
  storyPoints = $$(".story-point");
let frameImages = [],
  framesLoaded = false,
  lastFrame = -1,
  scrollProgress = 0,
  raf = 0;
function drawFrame(index) {
  const img = frameImages[index];
  if (!img || !img.complete || !img.naturalWidth) return;
  const rect = canvas.getBoundingClientRect(),
    dpr = Math.min(devicePixelRatio || 1, 1.6),
    w = Math.max(1, Math.round(rect.width * dpr)),
    h = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight),
    sw = w / scale,
    sh = h / scale;
  ctx.drawImage(
    img,
    (img.naturalWidth - sw) / 2,
    (img.naturalHeight - sh) / 2,
    sw,
    sh,
    0,
    0,
    w,
    h
  );
}
function updateStory() {
  if (!framesLoaded) return;
  const rect = story.getBoundingClientRect(),
    range = Math.max(1, rect.height - innerHeight);
  scrollProgress = Math.max(0, Math.min(1, -rect.top / range));
  const frame = Math.round(scrollProgress * (frameFiles.length - 1));
  const step = Math.min(2, Math.floor(scrollProgress * 3));
  if (frame !== lastFrame) {
    lastFrame = frame;
    if (!raf)
      raf = requestAnimationFrame(() => {
        raf = 0;
        drawFrame(frame);
      });
  }
  if (step !== activeStory) {
    activeStory = step;
    storyPoints.forEach((point, i) =>
      point.classList.toggle("active", i === step)
    );
    $("#storyStepCount").innerHTML = `0${step + 1} <b>/</b> 03`;
  }
  progressBar.style.transform = `scaleX(${scrollProgress})`;
}
const storyObserver = new IntersectionObserver(
  entries => {
    if (entries.some(entry => entry.isIntersecting) && !framesLoaded) {
      framesLoaded = true;
      frameImages = frameFiles.map((file, index) => {
        const image = new Image();
        image.decoding = "async";
        image.src = asset(file);
        image.onload = () => {
          if (index === 0) drawFrame(0);
          updateStory();
        };
        return image;
      });
      updateStory();
    }
  },
  { rootMargin: "350px 0px" }
);
storyObserver.observe(story);
window.addEventListener("scroll", updateStory, { passive: true });
window.addEventListener("resize", () => {
  if (framesLoaded) drawFrame(Math.max(0, lastFrame));
});
const revealObserver = new IntersectionObserver(
  entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 }
);
$$(
  ".section-head,.filters,.property-card,.why-photo,.why>div:last-child,.review-head,.review-card,.quick-contact-copy,.quick-contact-card,.contact-head,.contact-grid"
).forEach(node => {
  node.classList.add("reveal");
  revealObserver.observe(node);
});
$("#year").textContent = new Date().getFullYear();
renderLanguage("fr");

/* Paramètres de ville et libellés des options, synchronisés avec la langue active. */
function updateStaticCityLabels() {
  $$("#cityFilter option").forEach(option => {
    if (cityNames[language][option.value])
      option.textContent = cityNames[language][option.value];
  });
  const map = $(".contact-info iframe");
  map.src = `https://maps.google.com/maps?q=${encodeURIComponent(`${AGENCY_CITY}, Morocco`)}&z=12&output=embed`;
  map.title =
    language === "ar"
      ? `خريطة موقع الوكالة في ${cityNames.ar[AGENCY_CITY] || AGENCY_CITY}`
      : language === "en"
        ? `Agency location map in ${cityNames.en[AGENCY_CITY] || AGENCY_CITY}`
        : `Carte de situation de l’agence à ${cityNames.fr[AGENCY_CITY] || AGENCY_CITY}`;
}
$$("[data-lang]").forEach(button =>
  button.addEventListener("click", updateStaticCityLabels)
);
updateStaticCityLabels();

const featureText = {
  fr: {
    quickEyebrow: "Contact rapide",
    quickTitle: "Un projet en tête ? Parlons-en.",
    quickText:
      "Laissez quelques coordonnées ou appelez-nous directement. Le formulaire ouvre WhatsApp et n’enregistre pas vos données.",
    quickName: "Votre nom",
    quickPhone: "Votre téléphone",
    quickMessage: "Votre message",
    quickNamePlaceholder: "Ex. : Amine El Fassi",
    quickPhonePlaceholder: "+212 ...",
    quickMessagePlaceholder: "En quelques mots, que recherchez-vous ?",
    quickSend: "Continuer sur WhatsApp",
    quickCall: "Appeler Dream House",
    quickPrivacy: "Aucune donnée n’est enregistrée sur ce site.",
    quickGreeting: "Bonjour Dream House,",
    navDistricts: "Quartiers",
    journeyEyebrow: "Un parcours clair, à votre rythme",
    journeyTitle: "Votre projet en 90 secondes.",
    journeyIntro:
      "Quelques repères pour orienter la recherche. Rien n’est enregistré sur ce site.",
    journeyStepOne: "01 — Où et quel projet ?",
    journeyStepTwo: "02 — Budget et échéance",
    journeyStepThree: "03 — Usage et visite",
    step: "Étape",
    cityLabel: "Ville recherchée",
    dealLabel: "Votre projet",
    kindLabel: "Type de bien",
    budgetLabel: "Budget maximum indicatif",
    timingLabel: "Votre échéance",
    useLabel: "Usage envisagé",
    visitLabel: "Mode de visite souhaité",
    buy: "Acheter",
    rent: "Louer",
    anyKind: "À définir",
    villa: "Villa",
    riad: "Riad",
    apartment: "Appartement",
    land: "Terrain",
    anyBudget: "À définir",
    budget1: "Jusqu’à 1 000 000 MAD",
    budget5: "Jusqu’à 5 000 000 MAD",
    budget10: "Jusqu’à 10 000 000 MAD",
    budget25: "Jusqu’à 25 000 000 MAD",
    flexible: "À définir ensemble",
    threeMonths: "Dans les 3 mois",
    sixMonths: "Dans les 6 mois",
    later: "Plus tard",
    residence: "Résidence principale",
    secondHome: "Pied-à-terre",
    rentalProject: "Projet locatif à discuter",
    onsite: "Visite sur place",
    remote: "Je suis à distance",
    next: "Continuer",
    previous: "Retour",
    finish: "Voir ma sélection",
    privacy:
      "Aucune donnée n’est sauvegardée. Vous choisissez si vous souhaitez ouvrir WhatsApp.",
    completedTitle: "Votre première sélection est prête.",
    completedText:
      "Les annonces ci-dessous restent des exemples à vérifier. Ajustez les filtres ou transmettez votre brief à l’agence.",
    showResults: "Voir les biens correspondants",
    messageWhatsApp: "Transmettre mon brief sur WhatsApp",
    restart: "Modifier mes réponses",
    signature: "Le bon quartier. Le bon bien. Un parcours clair.",
    summaryCity: "Ville",
    summaryDeal: "Projet",
    summaryKind: "Bien",
    summaryBudget: "Budget indicatif",
    summaryTiming: "Échéance",
    summaryVisit: "Visite",
    whatsappLead: "Bonjour Dream House, voici les repères de mon projet :",
    districtsEyebrow: "Le carnet Dream House",
    districtsTitle: "Commencer par le quartier.",
    districtsIntro:
      "Des repères culturels sourcés pour découvrir Marrakech. Ils ne constituent ni une estimation de marché ni un conseil d’achat.",
    districtDemo:
      "Sélection éditoriale de démonstration — à compléter par l’équipe locale avant publication.",
    districtInspiration:
      "Visuel d’inspiration — ne représente pas nécessairement ce quartier.",
    medinaTag: "Repère patrimonial",
    guelizTag: "Repère culturel",
    palmeraieTag: "Repère paysager",
    medinaTitle: "Médina",
    guelizTitle: "Guéliz",
    palmeraieTitle: "Palmeraie",
    medinaBody:
      "L’UNESCO décrit la médina de Marrakech à travers ses monuments, ses remparts, ses portes et ses jardins. Ce repère patrimonial ne renseigne pas sur l’état d’un bien.",
    guelizBody:
      "Le guide touristique officiel situe le Jardin Majorelle dans le district de Guéliz. C’est un point de repère, pas une analyse résidentielle.",
    palmeraieBody:
      "Le guide officiel présente la Palmeraie comme une oasis de palmiers au nord de la médina. Les limites et caractéristiques de chaque bien restent à vérifier.",
    unescoSource: "Fiche UNESCO",
    guelizSource: "Guide officiel de Marrakech",
    palmeraieSource: "Guide officiel de Marrakech",
    discover: "Demander les biens disponibles",
    askLead:
      "Bonjour, je souhaite connaître les biens qui pourraient être disponibles dans le secteur ",
    askTail:
      " à Marrakech. Merci de confirmer l’emplacement précis de chaque bien.",
    passportEyebrow: "Passeport du bien",
    passportDemo:
      "Annonce de démonstration — aucune donnée ci-dessous n’est vérifiée.",
    passportPrice: "Prix affiché",
    passportArea: "Surface annoncée",
    passportRooms: "Chambres / salles de bains",
    passportDocuments: "Documents juridiques",
    passportMedia: "Photo, plan ou visite réelle",
    confirmed: "Confirmé",
    toConfirm: "À confirmer",
    notReported: "Non renseigné",
    inspiration: "Visuel d’inspiration — pas une photo certifiée du bien",
    noMedia: "Aucun média du bien fourni",
    passportCaution:
      "Avant une visite ou une offre, faites confirmer les informations et les documents par l’agence et les professionnels compétents.",
    passportRequest: "Demander confirmation à l’agence",
    close: "Fermer",
  },
  en: {
    quickEyebrow: "Quick contact",
    quickTitle: "Have a property in mind? Let’s talk.",
    quickText:
      "Leave a few details or call us directly. This form opens WhatsApp and does not store your information.",
    quickName: "Your name",
    quickPhone: "Your phone",
    quickMessage: "Your message",
    quickNamePlaceholder: "e.g. Amine El Fassi",
    quickPhonePlaceholder: "+212 ...",
    quickMessagePlaceholder: "Briefly, what are you looking for?",
    quickSend: "Continue on WhatsApp",
    quickCall: "Call Dream House",
    quickPrivacy: "No information is stored on this website.",
    quickGreeting: "Hello Dream House,",
    navDistricts: "Areas",
    journeyEyebrow: "A clear process, at your pace",
    journeyTitle: "Your project in 90 seconds.",
    journeyIntro:
      "A few details to guide the search. Nothing is saved on this website.",
    journeyStepOne: "01 — Where and what kind of search?",
    journeyStepTwo: "02 — Budget and timeframe",
    journeyStepThree: "03 — Intended use and viewing",
    step: "Step",
    cityLabel: "City you are looking in",
    dealLabel: "Your plan",
    kindLabel: "Property type",
    budgetLabel: "Indicative maximum budget",
    timingLabel: "Your timeframe",
    useLabel: "Intended use",
    visitLabel: "Preferred viewing format",
    buy: "Buy",
    rent: "Rent",
    anyKind: "To be decided",
    villa: "Villa",
    riad: "Riad",
    apartment: "Apartment",
    land: "Land",
    anyBudget: "To be decided",
    budget1: "Up to MAD 1,000,000",
    budget5: "Up to MAD 5,000,000",
    budget10: "Up to MAD 10,000,000",
    budget25: "Up to MAD 25,000,000",
    flexible: "To discuss",
    threeMonths: "Within 3 months",
    sixMonths: "Within 6 months",
    later: "Later",
    residence: "Main residence",
    secondHome: "Second home",
    rentalProject: "Rental project to discuss",
    onsite: "In-person viewing",
    remote: "I am viewing remotely",
    next: "Continue",
    previous: "Back",
    finish: "See my shortlist",
    privacy: "Nothing is stored. You choose whether to open WhatsApp.",
    completedTitle: "Your first shortlist is ready.",
    completedText:
      "The listings below are still examples to verify. Adjust the filters or send your brief to the agency.",
    showResults: "View matching listings",
    messageWhatsApp: "Send my brief on WhatsApp",
    restart: "Edit my answers",
    signature: "The right neighbourhood. The right home. A clearer journey.",
    summaryCity: "City",
    summaryDeal: "Plan",
    summaryKind: "Property",
    summaryBudget: "Indicative budget",
    summaryTiming: "Timeframe",
    summaryVisit: "Viewing",
    whatsappLead:
      "Hello Dream House, here are the details of my property search:",
    districtsEyebrow: "The Dream House field notes",
    districtsTitle: "Start with the neighbourhood.",
    districtsIntro:
      "Sourced cultural reference points for discovering Marrakech. They are not a market valuation or buying advice.",
    districtDemo:
      "Editorial demonstration — complete and validate these notes with the local team before publishing.",
    districtInspiration:
      "Inspirational image — it may not depict this neighbourhood.",
    medinaTag: "Heritage reference",
    guelizTag: "Cultural reference",
    palmeraieTag: "Landscape reference",
    medinaTitle: "Medina",
    guelizTitle: "Guéliz",
    palmeraieTitle: "Palmeraie",
    medinaBody:
      "UNESCO describes the Medina of Marrakesh through its monuments, ramparts, gates and gardens. This heritage reference says nothing about a property’s condition.",
    guelizBody:
      "The official tourism guide places Jardin Majorelle in the Guéliz district. It is a landmark, not a residential assessment.",
    palmeraieBody:
      "The official guide presents the Palm Grove north of the Medina. The boundaries and features of every property still need verification.",
    unescoSource: "UNESCO record",
    guelizSource: "Official Marrakech guide",
    palmeraieSource: "Official Marrakech guide",
    discover: "Ask about available properties",
    askLead:
      "Hello, I would like to ask about properties that may be available in ",
    askTail:
      " in Marrakech. Please confirm the exact location of each property.",
    passportEyebrow: "Property passport",
    passportDemo:
      "Demonstration listing — none of the information below has been verified.",
    passportPrice: "Listed price",
    passportArea: "Listed area",
    passportRooms: "Bedrooms / bathrooms",
    passportDocuments: "Legal documents",
    passportMedia: "Photo, plan or real tour",
    confirmed: "Confirmed",
    toConfirm: "To be confirmed",
    notReported: "Not provided",
    inspiration: "Inspirational image — not a verified photo of this property",
    noMedia: "No property media supplied",
    passportCaution:
      "Before a viewing or offer, have the agency and qualified professionals confirm the information and documents.",
    passportRequest: "Ask the agency to confirm",
    close: "Close",
  },
  ar: {
    quickEyebrow: "تواصل سريع",
    quickTitle: "هل لديك مشروع؟ لنتحدث.",
    quickText:
      "اترك بياناتك أو اتصل بنا مباشرة. يفتح النموذج واتساب ولا يحفظ معلوماتك.",
    quickName: "الاسم الكامل",
    quickPhone: "رقم هاتفك",
    quickMessage: "رسالتك",
    quickNamePlaceholder: "مثال: أمين الفاسي",
    quickPhonePlaceholder: "+212 ...",
    quickMessagePlaceholder: "باختصار، ما الذي تبحث عنه؟",
    quickSend: "المتابعة عبر واتساب",
    quickCall: "اتصل بدريم هاوس",
    quickPrivacy: "لا يتم حفظ أي بيانات على هذا الموقع.",
    quickGreeting: "مرحباً دريم هاوس،",
    navDistricts: "الأحياء",
    journeyEyebrow: "خطوات واضحة، على راحتك",
    journeyTitle: "مشروعك العقاري في 90 ثانية.",
    journeyIntro:
      "بعض التفاصيل لتوجيه البحث. لا يتم حفظ أي بيانات على هذا الموقع.",
    journeyStepOne: "01 — أين وما نوع المشروع؟",
    journeyStepTwo: "02 — الميزانية والموعد",
    journeyStepThree: "03 — الاستخدام والزيارة",
    step: "المرحلة",
    cityLabel: "المدينة المطلوبة",
    dealLabel: "نوع المشروع",
    kindLabel: "نوع العقار",
    budgetLabel: "الميزانية القصوى التقريبية",
    timingLabel: "موعدك المتوقع",
    useLabel: "الغرض من العقار",
    visitLabel: "طريقة الزيارة المفضلة",
    buy: "شراء",
    rent: "كراء",
    anyKind: "يُحدد لاحقاً",
    villa: "فيلا",
    riad: "رياض",
    apartment: "شقة",
    land: "أرض",
    anyBudget: "يُحدد لاحقاً",
    budget1: "حتى 1,000,000 درهم",
    budget5: "حتى 5,000,000 درهم",
    budget10: "حتى 10,000,000 درهم",
    budget25: "حتى 25,000,000 درهم",
    flexible: "يُحدد بالتشاور",
    threeMonths: "خلال 3 أشهر",
    sixMonths: "خلال 6 أشهر",
    later: "لاحقاً",
    residence: "سكن رئيسي",
    secondHome: "منزل ثانٍ",
    rentalProject: "مشروع للكراء قيد النقاش",
    onsite: "زيارة حضورية",
    remote: "أنا خارج المدينة",
    next: "متابعة",
    previous: "رجوع",
    finish: "عرض اختياراتي",
    privacy: "لا يتم حفظ أي بيانات. أنت تختار ما إذا كنت تريد فتح واتساب.",
    completedTitle: "أصبحت اختياراتك الأولية جاهزة.",
    completedText:
      "العقارات أدناه أمثلة تحتاج إلى التحقق. عدّل عوامل البحث أو أرسل تفاصيل طلبك إلى الوكالة.",
    showResults: "عرض العقارات المطابقة",
    messageWhatsApp: "إرسال طلبي عبر واتساب",
    restart: "تعديل إجاباتي",
    signature: "الحي المناسب. العقار المناسب. خطوات أوضح.",
    districtsEyebrow: "دفتر الأحياء من دريم هاوس",
    districtsTitle: "ابدأ باكتشاف الحي.",
    districtsIntro:
      "معلومات ثقافية موثقة لاكتشاف مراكش. لا تمثل تقييماً للسوق أو نصيحة للشراء.",
    districtDemo:
      "محتوى توضيحي — يجب على الفريق المحلي استكماله والتحقق منه قبل النشر.",
    districtInspiration: "صورة إلهامية — قد لا تمثل هذا الحي.",
    medinaTag: "معلم تراثي",
    guelizTag: "معلم ثقافي",
    palmeraieTag: "معلم طبيعي",
    medinaTitle: "المدينة القديمة",
    guelizTitle: "جيليز",
    palmeraieTitle: "النخيل",
    medinaBody:
      "تصف اليونسكو مدينة مراكش القديمة من خلال معالمها وأسوارها وأبوابها وحدائقها. ولا تعني هذه المعلومة تأكيد حالة أي عقار.",
    guelizBody:
      "يحدد دليل السياحة الرسمي حديقة ماجوريل في حي جيليز. وهي نقطة استدلال ثقافية وليست تقييماً سكنياً.",
    palmeraieBody:
      "يصف الدليل الرسمي بستان النخيل شمال المدينة القديمة. ويجب التحقق من حدود كل عقار وخصائصه.",
    unescoSource: "سجل اليونسكو",
    guelizSource: "دليل مراكش الرسمي",
    palmeraieSource: "دليل مراكش الرسمي",
    discover: "الاستفسار عن العقارات المتاحة",
    askLead: "مرحباً، أود الاستفسار عن العقارات المتاحة في ",
    askTail: " بمدينة مراكش. يرجى تأكيد الموقع الفعلي لكل عقار.",
    passportEyebrow: "بطاقة العقار",
    passportDemo: "إعلان توضيحي — لم يتم التحقق من أي معلومة أدناه.",
    passportPrice: "السعر المعروض",
    passportArea: "المساحة المعروضة",
    passportRooms: "غرف النوم / الحمّامات",
    passportDocuments: "الوثائق القانونية",
    passportMedia: "صورة أو مخطط أو جولة حقيقية",
    confirmed: "مؤكد",
    toConfirm: "يجب التأكيد",
    notReported: "غير متوفر",
    inspiration: "صورة إلهامية وليست صورة موثقة للعقار",
    noMedia: "لم تُقدّم وسائط للعقار",
    passportCaution:
      "قبل الزيارة أو تقديم عرض، اطلب من الوكالة والمتخصصين المؤهلين التحقق من المعلومات والوثائق.",
    passportRequest: "طلب تأكيد من الوكالة",
    close: "إغلاق",
  },
};
let activeJourney = null;
let activePassportCard = null;
let journeyStep = 0;
const journeyForm = $("#journeyForm");
const journeyStages = $$(".journey-stage", journeyForm);

function renderPassport(card) {
  if (!card) return;
  const t = featureText[language];
  const specs = $$(".specs span", card).map(node => node.textContent.trim());
  const getNumber = value =>
    value
      .match(/[0-9][0-9\s]*/)?.[0]
      .trim()
      .replace(/\s/g, "") || "";
  const area = specs.length
    ? `${getNumber(specs[specs.length - 1])} m²`
    : t.notReported;
  const rooms =
    specs.slice(0, -1).map(getNumber).filter(Boolean).join(" / ") ||
    t.notReported;
  const evidence = [
    [
      t.passportPrice,
      $("[data-price-display]", card)?.textContent.trim() || t.notReported,
      "toConfirm",
    ],
    [t.passportArea, area, "toConfirm"],
    [t.passportRooms, rooms, "toConfirm"],
    [t.passportDocuments, t.notReported, "notReported"],
    [
      t.passportMedia,
      card.dataset.img ? t.inspiration : t.noMedia,
      "notReported",
    ],
  ];
  const statusLabels = {
    confirmed: t.confirmed,
    toConfirm: t.toConfirm,
    notReported: t.notReported,
  };
  const list = $("#dialogEvidence");
  list.replaceChildren();
  evidence.forEach(([label, value, status]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    const flag = document.createElement("span");
    term.textContent = label;
    detail.textContent = value;
    flag.className = `evidence-status ${status}`;
    flag.textContent = statusLabels[status];
    row.append(term, detail, flag);
    list.append(row);
  });
  $("#dialogImage").alt = card.dataset.img ? t.inspiration : "";
  $("#dialogClose").setAttribute("aria-label", t.close);
  const request =
    language === "ar"
      ? `مرحباً، أود تأكيد المعلومات والوثائق الخاصة بالعقار ${card.dataset.name}.`
      : language === "en"
        ? `Hello, I would like the agency to confirm the information and documents for ${card.dataset.name}.`
        : `Bonjour, je souhaite faire confirmer les informations et les documents du bien ${card.dataset.name}.`;
  $("#dialogContact").href = waUrl(request);
}

function renderJourneySummary() {
  if (!activeJourney) return;
  const t = featureText[language];
  const city = cityNames[language][activeJourney.city];
  const deal = t[activeJourney.deal];
  const kind = activeJourney.kind === "all" ? t.anyKind : t[activeJourney.kind];
  const budget =
    activeJourney.budget === "all"
      ? t.anyBudget
      : `≤ ${new Intl.NumberFormat(language === "en" ? "en-GB" : "fr-MA").format(Number(activeJourney.budget))} MAD`;
  const timing = t[activeJourney.timing];
  const use = t[activeJourney.use];
  const visit = t[activeJourney.visit];
  $("#journeySummary").textContent =
    `${t.summaryCity}: ${city} · ${t.summaryDeal}: ${deal} · ${t.summaryKind}: ${kind} · ${t.summaryBudget}: ${budget} · ${t.summaryTiming}: ${timing} · ${t.summaryVisit}: ${visit} · ${t.useLabel}: ${use}`;
  const message = [
    t.whatsappLead,
    `${t.summaryCity}: ${city}`,
    `${t.summaryDeal}: ${deal}`,
    `${t.summaryKind}: ${kind}`,
    `${t.summaryBudget}: ${budget}`,
    `${t.summaryTiming}: ${timing}`,
    `${t.useLabel}: ${use}`,
    `${t.summaryVisit}: ${visit}`,
  ].join("\n");
  $("#journeyContact").href = waUrl(message);
}

function setJourneyStep(index) {
  journeyStep = Math.max(0, Math.min(2, index));
  journeyStages.forEach((stage, i) => {
    stage.hidden = i !== journeyStep;
  });
  $$(".journey-progress i").forEach((bar, i) =>
    bar.classList.toggle("active", i <= journeyStep)
  );
  $("#journeyStepNumber").textContent = `0${journeyStep + 1}`;
  $("#journeyBack").hidden = journeyStep === 0;
  $("#journeyBack span").textContent = featureText[language].previous;
  $("#journeyNextLabel").textContent =
    journeyStep === 2
      ? featureText[language].finish
      : featureText[language].next;
}

function renderFeatureText() {
  const t = featureText[language];
  $$("[data-feature]").forEach(node => {
    const value = t[node.dataset.feature];
    if (value !== undefined) node.innerHTML = value;
  });
  $$("[data-feature-placeholder]").forEach(node => {
    const value = t[node.dataset.featurePlaceholder];
    if (value !== undefined) node.placeholder = value;
  });
  $$("#journeyCity option").forEach(option => {
    if (cityNames[language][option.value])
      option.textContent = cityNames[language][option.value];
  });
  $$("[data-area-ask]").forEach(link => {
    const area = t[`${link.dataset.areaAsk}Title`];
    link.href = waUrl(`${t.askLead}${area}${t.askTail}`);
  });
  if (activePassportCard && dialog.open) renderPassport(activePassportCard);
  renderJourneySummary();
  setJourneyStep(journeyStep);
}
$$("[data-lang]").forEach(button =>
  button.addEventListener("click", renderFeatureText)
);
renderFeatureText();

$("#quickContactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const t = featureText[language];
  const message = [
    t.quickGreeting,
    `${t.quickName}: ${form.get("quickName")}`,
    `${t.quickPhone}: ${form.get("quickPhone")}`,
    `${t.quickMessage}: ${form.get("quickMessage")}`,
  ].join("\n");
  window.open(waUrl(message), "_blank", "noopener,noreferrer");
});

journeyStages.slice(1).forEach(stage => {
  stage.hidden = true;
});
setJourneyStep(0);
journeyForm.addEventListener("submit", event => {
  event.preventDefault();
  if (journeyStep < 2) {
    setJourneyStep(journeyStep + 1);
    return;
  }
  activeJourney = {
    city: $("#journeyCity").value,
    deal: $("#journeyDeal").value,
    kind: $("#journeyKind").value,
    budget: $("#journeyBudget").value,
    timing: $("#journeyTiming").value,
    use: $("#journeyUse").value,
    visit: $('input[name="journeyVisit"]:checked').value,
  };
  $("#cityFilter").value = activeJourney.city;
  $("#dealFilter").value = activeJourney.deal;
  $("#typeFilter").value = activeJourney.kind;
  $("#budgetFilter").value = activeJourney.budget;
  applyFilters();
  journeyForm.hidden = true;
  $("#journeyResults").hidden = false;
  renderJourneySummary();
});
$("#journeyBack").addEventListener("click", () =>
  setJourneyStep(journeyStep - 1)
);
$("#journeyShowResults").addEventListener("click", event => {
  event.preventDefault();
  $("#properties").scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
  });
});
$("#journeyRestart").addEventListener("click", () => {
  journeyForm.hidden = false;
  $("#journeyResults").hidden = true;
  setJourneyStep(0);
});

dialog.addEventListener("close", () => {
  activePassportCard = null;
});

"use strict";
const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();
// Inspiraatiokuvat näkyvät paikallisesti ja liitetään tilaukseen sen lähetysvaiheessa.
document.querySelectorAll(".image-slot").forEach((slot) => {
  const input = slot.querySelector("input"),
    image = slot.querySelector("img"),
    empty = slot.querySelector(".slot-empty"),
    remove = slot.querySelector(".remove-image");
  const showFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      image.src = event.target.result;
      image.hidden = false;
      empty.hidden = true;
      remove.hidden = false;
    };
    reader.readAsDataURL(file);
  };
  input.addEventListener("change", () => showFile(input.files[0]));
  ["dragenter", "dragover"].forEach((type) =>
    slot.addEventListener(type, (event) => {
      event.preventDefault();
      slot.classList.add("dragging");
    }),
  );
  ["dragleave", "drop"].forEach((type) =>
    slot.addEventListener(type, (event) => {
      event.preventDefault();
      slot.classList.remove("dragging");
    }),
  );
  slot.addEventListener("drop", (event) =>
    showFile(event.dataTransfer.files[0]),
  );
  remove.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    input.value = "";
    image.removeAttribute("src");
    image.hidden = true;
    empty.hidden = false;
    remove.hidden = true;
  });
});
$("menuBtn").addEventListener("click", () => {
  const n = $("nav");
  n.classList.toggle("open");
  $("menuBtn").setAttribute("aria-expanded", n.classList.contains("open"));
});
document
  .querySelectorAll("#nav a")
  .forEach((a) =>
    a.addEventListener("click", () => $("nav").classList.remove("open")),
  );

const productPhotos = [
  {
    src: "https://images.unsplash.com/photo-1594046242778-99efad4832a9?auto=format&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Julkinen valokuva marjoin koristellusta täytekakusta",
  },
  {
    src: "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Julkinen valokuva näyttävästä kerroskakusta",
  },
  {
    src: "https://images.unsplash.com/photo-1502597276204-a3833c063739?auto=format&fit=crop&fm=jpg&q=85&w=1200",
    alt: "Julkinen valokuva värikkäistä kuppikakuista",
  },
];
document
  .querySelectorAll(".product-card .product-image img")
  .forEach((image, index) => {
    const photo = productPhotos[index];
    if (!photo) return;
    image.src = photo.src;
    image.alt = photo.alt;
    image.referrerPolicy = "no-referrer";
  });
const storyPhoto = document.querySelector(".story-visual img");
if (storyPhoto) {
  storyPhoto.src =
    "https://tse1.mm.bing.net/th/id/OIP.Kxmbz3YIK2fIDgKJSwEGkAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
  storyPhoto.alt = "BakeVyn Facebookissa julkaistu kuva";
  storyPhoto.referrerPolicy = "no-referrer";
}

const cakeGalleryImages = [
  {
    id: "1uFNOP05yJUIw27dsjkPw6RDHtVF5SfEU",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1HNZyosPo7eq3hN5ym8ohCBEIo_nUmDyW",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1MoqZPVjZOPgiOUrMxsIxnYOou47sAxqt",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1g7K3qev0_qBLXQh6BEq-StN9yKiR0CtP",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1aw7yM2WEOfcOfjeIc80-FNpu7rwa7oF-",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1AqnrENTfCiPMfNFJ6aku7ouvhLyaKL2m",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1PF1lMxhrvWu8eIJrpbz5yfcaHOxT23sF",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1XMlXcxea5GiDY4vpp8P5dqvLb6Y_lRYa",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1xSUipa1VtQnyeriVSRsMbkBS_fJ9qDMK",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1AO3jy8fCE-ba1H4vAT-J2CvVmF0LRSxk",
    name: "yksinkertaiset kakut",
  },
  {
    id: "17H-IBO9jn0qz0BWCbeWWViEJuR0mqvnK",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1NbGbKMQbtYXOHbVk7F7WPVOl5qQG_f0W",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1ABakl89JhszhUUIL90K9tN4LbSBPsu11",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1k1DrlCrnQ4S7xPH8ptqady3Qs7pLcHow",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1flTiDKivL5Qmb7M5rXtVVJNQK6VTH_Yu",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1rY3D-oDqsxsyEUxqrjpYqnQgMMLbl30c",
    name: "yksinkertaiset kakut",
  },
  {
    id: "162-IoXpUz-hjxbfMIZWSDn7Q65NyEpj0",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1GxALqb1MztUMoKliwC9AX7BK3Rg_xMub",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1-fUDFCYOKKTJdQFa241HxUSwFFDfejPA",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1cb2NbTyzyT8yHX67jtwp7IK7kH_MQHqS",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1PiWhsE5kQ-3s_yetaPR78SJV7LI4E0hV",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1MnAJZcpYjSkOYDC5kYRq2DHSO6lA113i",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1KGaYJu6hBaktzEt7WKDt6t8Og1f1nu-5",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1tld7bJ3m9Tmw-72FQ5-mkV9IfxRDChp5",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1xBmuvVMMUSSDwd48WM0s7MP2h7cUQx0K",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1txf2XtiMxmNYot2ZatQOPlimNB4pPTmH",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1CBBr21VsY_TLvCQfaKYIZPaTvSfu1yA9",
    name: "yksinkertaiset kakut",
  },
  {
    id: "15NEFA1MNxnrQaekzmDiK_pXRuHKoGVaR",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1M9i1sLxCu_bGtXyp4RtEMllym5Of938x",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1IHu7VdLYfsDgB88GkIBbK1kpnLARZmdD",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1dkPuZmlUPEuJcOrXDV1XEmhpOjAz668V",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1xfsygGjGezWbTV_iZe7Zh2nbt5mw94FR",
    name: "yksinkertaiset kakut",
  },
  {
    id: "11wZeewmvq4wHHblbKY5nDxKvShKy78_K",
    name: "yksinkertaiset kakut",
  },
  {
    id: "1IwzaCcH1YlcZtX6vGak-j7eFcRaDqFcM",
    name: "teemakakut",
  },
  {
    id: "1EnsbPH8F9NPXtdnF4c29-F1heKK0B-kB",
    name: "keksikakut",
  },
  {
    id: "1eUxqJfEL2pRBicobozLFifuYADdd2TMG",
    name: "keksikakut",
  },
  {
    id: "1cZYmfl-3F11NDorYpA2hr6w-N3ZczHqX",
    name: "keksikakut",
  },
  {
    id: "1N8UaNwMPV-eMq2zud0tnp4lymOG8LcJd",
    name: "kukkakakut",
  },
  {
    id: "1hn_EsELuKW29gnUt-Dp6hDOJ7WjtO5-L",
    name: "teemakakut",
  },
  {
    id: "1-yWKdLOu81BMrjjPN0PL73DG6o_WX-cJ",
    name: "teemakakut",
  },
  {
    id: "1kooASEC24IbTP_zZbijA-nu0hgVqlrz5",
    name: "teemakakut",
  },
  {
    id: "1jQFgQSxVSbxsL7AOUehImj_qzAg2Wbf5",
    name: "teemakakut",
  },
  {
    id: "1rRZc1YFZc_jLLFJ-nGefvIZUkT8Eh8_J",
    name: "teemakakut",
  },
  {
    id: "1dPSBVi4ujL853DHtAwIyOM_MAhGqQXX3",
    name: "teemakakut",
  },
  {
    id: "1X2zT8rtnkRIWSuI3YRYonR0S3uJmsB1Y",
    name: "teemakakut",
  },
  {
    id: "1E8TECRKxpxOZ2PUG6XwOJhZzJRGIo5DY",
    name: "teemakakut",
  },
  {
    id: "1E6uwy366w06DnZoIqYzmzBxEBeTRnx4f",
    name: "teemakakut",
  },
  {
    id: "1LdRTuhqPWHK2WF9XwQ1ZO0zQSYC_7LZA",
    name: "teemakakut",
  },
  {
    id: "1wnz9MtsCUibF3H1wuGPxT-_03xnT4H-A",
    name: "teemakakut",
  },
  {
    id: "1Jkz8XPxWVy63pXw4ewHHQ0z5s7-hGApo",
    name: "teemakakut",
  },
  {
    id: "1Mcdi-WEd3JpV4QNw0_0zshb5UV0KELLE",
    name: "teemakakut",
  },
  {
    id: "1mW5CxdW3CoVk4MUVYOaobeL43iJTqe23",
    name: "teemakakut",
  },
  {
    id: "1-oh0j4nztzevvVzVNsOAJ_CP6O5NZ1uM",
    name: "teemakakut",
  },
  {
    id: "1fZEuhDIN7DQbVc6rXD5GYFC-My6t2c1j",
    name: "teemakakut",
  },
  {
    id: "1Y6eDn5WInGaMhbE99ZL3t7LeRo0ihyYT",
    name: "teemakakut",
  },
  {
    id: "1Ct3kRvW8feaLPSZ16bFd60acU7hNfbNC",
    name: "teemakakut",
  },
  {
    id: "1xaDqoSwJ-DuHzb6EJ6lElH9okz3X6h1O",
    name: "teemakakut",
  },
  {
    id: "17-iIv9D4hopciVfYxZo4an_Rwggyp2FT",
    name: "teemakakut",
  },
  {
    id: "1_tnndITjghCoudpsISPx9VKNaJEzpvhb",
    name: "teemakakut",
  },
  {
    id: "1L30micvRi-dvEQ_Fn_A5904-4WCNPq4J",
    name: "teemakakut",
  },
  {
    id: "1r6-GoRAHZFjcD7s3GicH7aaqna_S9Udf",
    name: "teemakakut",
  },
  {
    id: "1WBR5Juw0uQfS6u2KU8EGIsl34mhIenH0",
    name: "teemakakut",
  },
  {
    id: "1zMDGM-mARCkYK81cNMwtxHUFb9r8A64M",
    name: "teemakakut",
  },
  {
    id: "19kSY2jYAJ3O7_u0qIHHoG1tatIltJf1w",
    name: "teemakakut",
  },
  {
    id: "1tny82IQzSf6sr5U9tGOxz6BSmzl4Mi_2",
    name: "teemakakut",
  },
  {
    id: "1fursSuHnKgks9K9g6x4mbzUCFgCbUL1b",
    name: "teemakakut",
  },
  {
    id: "1_ZMVnqfpcV4DBXSXO7PmEqX42ZEFs4vx",
    name: "teemakakut",
  },
  {
    id: "1Z7vgrHg_JBHpdXzH7hCxqtuLwoEADuLj",
    name: "teemakakut",
  },
  {
    id: "1hPdbEEFOW5jVdkymY6adG_seuq0fXEp_",
    name: "teemakakut",
  },
  {
    id: "1E3kqfOq9jR-UYoyxYRLBRwTdDRcz1jcP",
    name: "teemakakut",
  },
  {
    id: "1sl9fdnkWSZU4GWIpB1mTAdhh1uaVqUSz",
    name: "teemakakut",
  },
  {
    id: "1NsgOxyasaD__jIuyENKYxWX_r-z-bfWe",
    name: "teemakakut",
  },
  {
    id: "1Vk4sj4jn_-jyb0TWeUmi1mo_m61irKR8",
    name: "teemakakut",
  },
  {
    id: "1dzQxr1jkwNX6JmnB3C_zKaNZZjJkfpOE",
    name: "teemakakut",
  },
  {
    id: "1mZ-Iia2SP9VdleZzg1ChZpQvMeFIsx5x",
    name: "teemakakut",
  },
  {
    id: "1yQOWAYEDwU1Uv50YrgZyySHgnnPiCnVY",
    name: "teemakakut",
  },
  {
    id: "1Q9nvEHaO1n-rv7tlBC3fd8BczTxwKrr4",
    name: "teemakakut",
  },
  {
    id: "1LsXaRR6GjwDeMDrKEtqUrtpN3YjWyojA",
    name: "kukkakakut",
  },
  {
    id: "13ctlKV6Uede1f7OVjTOSAyf3Mymu_z2_",
    name: "kukkakakut",
  },
  {
    id: "19Zl2goqmfx1Dtkyf3o2PgYN5QRkaoIt_",
    name: "kukkakakut",
  },
  {
    id: "1YAp3bFqrIlv76WRHm64f8G9ZNK69aIkw",
    name: "kukkakakut",
  },
  {
    id: "1WE5_aDmUo7920E_j_FgDNYPQSUEdp_XG",
    name: "kukkakakut",
  },
  {
    id: "1pob8ZfiYV1_AWyHayBL55Sc_VpAXExM2",
    name: "kukkakakut",
  },
  {
    id: "1z1pDImRx3a-KE3K4sPnfL6_zAn34kr5x",
    name: "kukkakakut",
  },
  {
    id: "1F8wc5pQJBrnn78ejjvFISEQrTyODy4iv",
    name: "kukkakakut",
  },
  {
    id: "1dz7yI92omqneu0snndZwSZkQo9lTt8xA",
    name: "kukkakakut",
  },
  {
    id: "1XDBfwxk9Vi5agjgsxujA9WKSvfMbIzVV",
    name: "kukkakakut",
  },
  {
    id: "1riaOGLT2VyL6GnjWWYTZEhwDCmluN7Bh",
    name: "kukkakakut",
  },
  {
    id: "1btHZXrK2ii6UH29pzLrumlCqKvrzFfkC",
    name: "kukkakakut",
  },
  {
    id: "1js7QnkdaNFRIuH5zNqi_-IsenKXr_AB2",
    name: "kukkakakut",
  },
  {
    id: "1yKn0gOuJSPnjg82Wr65E6dm90fEw1SBp",
    name: "kukkakakut",
  },
  {
    id: "1yo0Tm0cQiDeL8AFnSZ6jmamugUo86DYC",
    name: "kukkakakut",
  },
  {
    id: "1-8GeJjPSTIyace0O5OJgTecxzXqKuIrp",
    name: "kukkakakut",
  },
  {
    id: "1FU0i_Eqk0NfVQEjFOW1_HQ506gycHVqL",
    name: "kukkakakut",
  },
  {
    id: "11O-jogoIDUy5vHV1ianaTNnLf7WRX_px",
    name: "kukkakakut",
  },
  {
    id: "1zSz38ZzBhQwpuE1M1a7aaGbFM8z1rtUA",
    name: "kukkakakut",
  },
  {
    id: "1IpVPYeKPHBNKV1IvYHJF6A7da00j7tvB",
    name: "kukkakakut",
  },
  {
    id: "1U5kZGnpC3iWmJN4DSwoqVrlx3wizSggL",
    name: "kukkakakut",
  },
  {
    id: "1NBwjGYLbM_tSGky7eGBPtLzuNllLybYa",
    name: "kukkakakut",
  },
  {
    id: "1kpLXKYyjAzcWSjB-9V-fA3Qebh8q55UE",
    name: "kukkakakut",
  },
  {
    id: "1dm1cR-WY0MAohj3FM5NcCUW0ESXkIiXO",
    name: "kukkakakut",
  },
  {
    id: "1C1N-teIwnsURUg3yxWWpxMQxlDdjX6qO",
    name: "kukkakakut",
  },
  {
    id: "1o_8L06A00MdQTS_5FkawvX5P8Ifa6pw9",
    name: "kukkakakut",
  },
  {
    id: "1Oo2Z9Ua_SQ_750x_OQXRWeoWeIaRDV-8",
    name: "kukkakakut",
  },
  {
    id: "1mal5vQpWGCUHEEUnu1fbga25zI7IYUHg",
    name: "kukkakakut",
  },
  {
    id: "1G7NvnZ1QIT3asRfkNrYRsjYjxbuh57UK",
    name: "kukkakakut",
  },
  {
    id: "19bUrSe-ZQol0ZiO0mASKk8Xnx8mMyg0V",
    name: "mirror glaze -kakut",
  },
  {
    id: "1TJ_5NXe0B5teEu8b3-3T2GXhTMMy9UhC",
    name: "mirror glaze -kakut",
  },
  {
    id: "1jT9ln77qmougiakHZfOYnYQCLJ39DVsJ",
    name: "mirror glaze -kakut",
  },
  {
    id: "1u0wdVkQznino2hhs2-2rBuMuM_xZUemz",
    name: "mirror glaze -kakut",
  },
  {
    id: "1bNCtzdQl12uibsqpIkbl1C2FYsB9saE3",
    name: "mirror glaze -kakut",
  },
  {
    id: "1DujSGvPoh5zbknYDeNK_PcyXBGHRPF-8",
    name: "mirror glaze -kakut",
  },
  {
    id: "1EVBO9eJp2ewumrsv0-_tUgVSnCeaVffw",
    name: "mirror glaze -kakut",
  },
  {
    id: "1bs8FDvwYiXTVxyA0eiKn5kXnmOiwi-ko",
    name: "vintage-kakut",
  },
  {
    id: "1w5zdEkb2TlTtAjczvhoiz2RkCV8pecm0",
    name: "vintage-kakut",
  },
  {
    id: "1HR3Hdh-AcdrezJRgNpv7ttDZHq9fW50A",
    name: "vintage-kakut",
  },
  {
    id: "1yqPB0Y1L3MhgdrQi_rumI_uxzfeaCnEZ",
    name: "vintage-kakut",
  },
  {
    id: "1pA97ecVNyqlfoFLsJSfRz_dUVS-KfD1C",
    name: "teemakakut",
  },
  {
    id: "15L4AofNoP0tFmBTjp_AwKCuqAGNCFqP3",
    name: "vintage-kakut",
  },
  {
    id: "1-ZH1TtMoMhUKPDS7kOG9ieiWWvwCqANh",
    name: "vintage-kakut",
  },
  {
    id: "1dEGVTIfmhSegSdMxcwmDChFHVZtlG53S",
    name: "vintage-kakut",
  },
  {
    id: "1Dm1oldKujcwuroRU-ykDX7Lqe8dU0ql9",
    name: "vintage-kakut",
  },
  {
    id: "1pCbhR7GrgvAI8tpQ92Wyj5D7oZeIX9wS",
    name: "vintage-kakut",
  },
  {
    id: "1Ek965th9RRJJd0iTgkn4GdZP3yQxmCK-",
    name: "vintage-kakut",
  },
  {
    id: "1MoZ5ixw0utGHjbJmRaCLWwlyh4X_hm9j",
    name: "vintage-kakut",
  },
  {
    id: "1PxcC_PWO4LG-RhqadgZUVUThvq5tqd1f",
    name: "vintage-kakut",
  },
  {
    id: "1fZV8qMcFJ3Me8dRTvN_-Je7AZmUvyPvG",
    name: "vintage-kakut",
  },
  {
    id: "1FoHpDuHoJNEpPH_xPqUpdlrDN3byt7Ie",
    name: "vintage-kakut",
  },
];
let selectedCake = null;
const cakeGalleryTrack = $("cakeGalleryTrack");
if (cakeGalleryTrack) {
  const toTitleCase = (value) =>
    value.replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("fi-FI"));
  const selectCake = (cake, card) => {
    selectedCake = {
      ...cake,
      src: `https://drive.google.com/thumbnail?id=${cake.id}&sz=w1200`,
    };
    document.querySelectorAll(".cake-gallery-card").forEach((item) => {
      const isSelected = item === card;
      item.classList.toggle("selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
    $("selectedCakeImage").hidden = false;
    $("selectedCakePhoto").src = selectedCake.src;
    $("selectedCakePhoto").alt = toTitleCase(selectedCake.name);
    $("selectedCakeName").textContent = toTitleCase(selectedCake.name);
    updateAddToCartButton();
  };
  cakeGalleryImages.forEach((cake) => {
    const { id, name } = cake;
    const card = document.createElement("button");
    const image = document.createElement("img");
    const caption = document.createElement("span");
    card.type = "button";
    card.className = "cake-gallery-card";
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `Valitse kuva: ${toTitleCase(name)}`);
    image.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
    image.alt = toTitleCase(name);
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    caption.textContent = toTitleCase(name);
    card.append(image, caption);
    cakeGalleryTrack.append(card);
    card.addEventListener("click", () => selectCake(cake, card));
  });
  const moveGallery = (direction) =>
    cakeGalleryTrack.scrollBy({
      left: direction * cakeGalleryTrack.clientWidth * 0.84,
      behavior: "smooth",
    });
  $("cakeGalleryPrev").addEventListener("click", () => moveGallery(-1));
  $("cakeGalleryNext").addEventListener("click", () => moveGallery(1));
}

const groups = {
  sizes: "8",
  bases: "Vaalea vanilja",
  fillings: "Mansikka & vanilja",
  decorations: "Hillitty koristelu",
};
let customCakeNote = "";
let total = 45;

const previewConfig = {
  sizes: {
    8: {
      width: 144,
      height: 72,
      topY: 84,
      bodyY: 84,
      radiusX: 72,
      radiusY: 19,
      dripY: 108,
      plateScale: 1,
      mood: "Pieni ja suloinen",
    },
    12: {
      width: 164,
      height: 80,
      topY: 80,
      bodyY: 80,
      radiusX: 82,
      radiusY: 21,
      dripY: 106,
      plateScale: 1.03,
      mood: "Tasapainoinen juhlakakku",
    },
    16: {
      width: 184,
      height: 90,
      topY: 76,
      bodyY: 76,
      radiusX: 92,
      radiusY: 24,
      dripY: 104,
      plateScale: 1.08,
      mood: "Näyttävä juhlapöytään",
    },
    20: {
      width: 204,
      height: 102,
      topY: 70,
      bodyY: 70,
      radiusX: 102,
      radiusY: 26,
      dripY: 100,
      plateScale: 1.13,
      mood: "Iso ja juhlavampi",
    },
  },
  bases: {
    "Vaalea vanilja": {
      body: "#e9cfc5",
      top: "#f7f0e7",
      icing: "#f9f5ef",
      accent: "#d9bbb1",
    },
    Suklaa: {
      body: "#8f6554",
      top: "#b98c78",
      icing: "#f3e6dc",
      accent: "#6f4c40",
    },
    "Gluteenittomista raaka-aineista": {
      body: "#dbc8b4",
      top: "#f2e5d3",
      icing: "#faf4eb",
      accent: "#c4ab91",
    },
  },
  fillings: {
    "Mansikka & vanilja": {
      top: "#f0c0c3",
      bottom: "#f7e9df",
      label: "Raikas marjaisa",
    },
    "Vadelma & valkosuklaa": {
      top: "#d78398",
      bottom: "#fbf5ee",
      label: "Marjainen ja pehmeä",
    },
    "Suklaa & kinuski": {
      top: "#8d5b47",
      bottom: "#d1a06b",
      label: "Täyteläinen herkku",
    },
    "Mustikka & sitruuna": {
      top: "#7b7fb2",
      bottom: "#f1da72",
      label: "Raikas ja pirteä",
    },
  },
  decorations: {
    "Hillitty koristelu": { style: "minimal", label: "Kevyt ja elegantti" },
    "Runsas marjakoristelu": { style: "berries", label: "Runsas ja marjaisa" },
    Teemakoristelu: { style: "theme", label: "Leikkisä teemakakku" },
  },
};

let cakeView = "outside";
const cakePhotos = {
  berry:
    "https://images.unsplash.com/photo-1669926268447-be7c02b88f30?auto=format&fit=crop&fm=jpg&q=85&w=1000",
  chocolate:
    "https://images.unsplash.com/photo-1709195902163-7eee13e78970?auto=format&fit=crop&fm=jpg&q=85&w=1000",
  theme:
    "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&fm=jpg&q=85&w=1000",
  slice:
    "https://images.unsplash.com/photo-1564844536308-75c540dbf14e?auto=format&fit=crop&fm=jpg&q=85&w=1000",
};
function photoForSelection() {
  if (cakeView === "inside") return cakePhotos.slice;
  if (groups.decorations === "Teemakoristelu") return cakePhotos.theme;
  if (groups.bases === "Suklaa" || groups.fillings === "Suklaa & kinuski")
    return cakePhotos.chocolate;
  return cakePhotos.berry;
}
function updateCakePreview() {
  if (!$("cakePreview")) return;
  const size = previewConfig.sizes[groups.sizes];
  const decor = previewConfig.decorations[groups.decorations];
  const filling = previewConfig.fillings[groups.fillings];
  const zoom = { 8: 1, 12: 1.06, 16: 1.13, 20: 1.2 }[groups.sizes];
  let photo = $("cakePhoto");
  if (!photo) {
    $("cakePreview").outerHTML =
      '<img id="cakePhoto" class="cake-photo" alt="" referrerpolicy="no-referrer">';
    photo = $("cakePhoto");
  }
  photo.src = photoForSelection();
  photo.alt =
    cakeView === "inside"
      ? "Julkinen valokuva kakkupalasta, jossa kakun kerrokset näkyvät"
      : "Julkinen valokuva valittua tyyliä vastaavasta juhlakakusta";
  photo.style.transform = `scale(${zoom})`;
  photo.style.objectPosition =
    decor.style === "berries"
      ? "50% 42%"
      : decor.style === "theme"
        ? "50% 35%"
        : "50% 50%";
  $("sumMood").textContent = decor.label;
  $("sumStyle").textContent =
    cakeView === "inside" ? "Sisältä: " + filling.label : size.mood;
}

function updateCake() {
  total = 0;
  for (const [group, value] of Object.entries(groups)) {
    const btn = [...$(group).querySelectorAll("button")].find(
      (b) => b.dataset.val === value,
    );
    if (btn) total += Number(btn.dataset.price);
  }
  $("sumSize").textContent = groups.sizes + " henkilöä";
  $("sumBase").textContent = groups.bases;
  $("sumFilling").textContent = groups.fillings;
  $("sumDecoration").textContent = groups.decorations;
  $("totalPrice").textContent = total + " €";
  updateCakePreview();
}
$("cakeCustomNote").addEventListener("input", (event) => {
  customCakeNote = event.target.value.trim();
  $("sumCustomNoteRow").hidden = !customCakeNote;
  $("sumCustomNote").textContent = customCakeNote;
});

const cartKey = "bakevy-demo-cart-v1";
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem(cartKey) || "[]") || [];
} catch (e) {
  cart = [];
}
const cakeDescription = (item) =>
  `${item.size} hlö · ${item.base} · ${item.filling} · ${item.decoration}${item.customNote ? ` · Toive: ${String(item.customNote).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char])}` : ""}`;
const photoForItem = (item) => {
  if (item.photo) return item.photo;
  if (item.decoration === "Teemakoristelu") return cakePhotos.theme;
  if (item.base === "Suklaa" || item.filling === "Suklaa & kinuski")
    return cakePhotos.chocolate;
  return cakePhotos.berry;
};
function saveCart() {
  try {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  } catch (e) {}
}
function cartSum() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function renderCart() {
  const items = $("cartItems");
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("cartCount").textContent = count;
  $("cartTotal").textContent = cartSum() + " €";
  const pickupReady = Boolean(timeInput.value && selectedPickupDate);
  $("cartPickup").textContent = pickupReady
    ? `Nouto: ${formatPickupDate(selectedPickupDate)} klo ${timeInput.value}`
    : "Noutoaikaa ei ole vielä valittu.";
  $("cartCheckout").innerHTML = pickupReady
    ? "Tee tilaus <span>↗</span>"
    : "Valitse noutoaika <span>↘</span>";
  $("cartCheckout").href = pickupReady ? "#tilaus" : "#kalenteri";
  $("cartCheckout").setAttribute("aria-disabled", String(!cart.length));
  if (!cart.length) {
    items.innerHTML =
      '<p class="cart-empty">Ostoskorisi on vielä tyhjä.<br />Lisää oma kakkusi generaattorista.</p>';
    return;
  }
  items.innerHTML = cart
    .map(
      (item) =>
        `<article class="cart-item"><img class="cart-item-image" src="${photoForItem(item)}" alt="" /><div><h3>${item.title}</h3><p>${cakeDescription(item)}</p><div class="cart-item-actions"><button type="button" data-cart-action="minus" data-id="${item.id}" aria-label="Vähennä yksi">−</button><button type="button" data-cart-action="plus" data-id="${item.id}" aria-label="Lisää yksi">＋</button><button type="button" class="cart-remove" data-cart-action="remove" data-id="${item.id}">Poista</button></div></div><div class="cart-item-price"><strong>${item.price * item.quantity} €</strong><small>${item.quantity} kpl</small></div></article>`,
    )
    .join("");
}
function openCart() {
  $("cartDrawer").classList.add("open");
  $("cartDrawer").setAttribute("aria-hidden", "false");
  $("cartButton").setAttribute("aria-expanded", "true");
  $("cartBackdrop").hidden = false;
}
function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("cartDrawer").setAttribute("aria-hidden", "true");
  $("cartButton").setAttribute("aria-expanded", "false");
  $("cartBackdrop").hidden = true;
}
function updateAddToCartButton() {
  const button = $("addToCart");
  button.disabled = !selectedCake;
  button.innerHTML = selectedCake
    ? "Lisää ostoskoriin <span>＋</span>"
    : "Valitse kakku ylhäältä ensin";
}
updateAddToCartButton();
$("addToCart").addEventListener("click", () => {
  if (!selectedCake) return;
  cart.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: "Oma juhlakakku",
    size: groups.sizes,
    base: groups.bases,
    filling: groups.fillings,
    decoration: groups.decorations,
    customNote: customCakeNote,
    photo: selectedCake?.src || photoForSelection(),
    referenceImage: selectedCake
      ? { src: selectedCake.src, name: selectedCake.name }
      : null,
    price: total,
    quantity: 1,
  });
  saveCart();
  renderCart();
  openCart();
});
$("cartButton").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("cartBackdrop").addEventListener("click", closeCart);
$("cartCheckout").addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCart();
});
$("cartItems").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;
  const index = cart.findIndex((item) => item.id === button.dataset.id);
  if (index < 0) return;
  if (button.dataset.cartAction === "plus") cart[index].quantity += 1;
  if (button.dataset.cartAction === "minus") cart[index].quantity -= 1;
  if (button.dataset.cartAction === "remove" || cart[index].quantity < 1)
    cart.splice(index, 1);
  saveCart();
  renderCart();
});

Object.keys(groups).forEach((group) =>
  $(group).addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-val]");
    if (!btn) return;
    $(group)
      .querySelectorAll("button")
      .forEach((b) => b.classList.toggle("active", b === btn));
    groups[group] = btn.dataset.val;
    updateCake();
  }),
);

document.querySelectorAll("[data-cake-view]").forEach((button) =>
  button.addEventListener("click", () => {
    cakeView = button.dataset.cakeView;
    document.querySelectorAll("[data-cake-view]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    updateCakePreview();
  }),
);

// Valittu noutopäivä ja -aika lisätään tilaukseen.
const monthHeading = [
  "Tammikuu",
  "Helmikuu",
  "Maaliskuu",
  "Huhtikuu",
  "Toukokuu",
  "Kesäkuu",
  "Heinäkuu",
  "Elokuu",
  "Syyskuu",
  "Lokakuu",
  "Marraskuu",
  "Joulukuu",
];
const mondayOf = (date) => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d;
};
const isoLocal = (d) =>
  [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0"),
  ].join("-");
const initial = new Date();
initial.setHours(0, 0, 0, 0);
let shown = new Date(initial.getFullYear(), initial.getMonth(), 1);
const key = "bakevy-demo-days-v1";
let overrides = {};
try {
  overrides = JSON.parse(localStorage.getItem(key) || "{}") || {};
} catch (e) {
  overrides = {};
}
const statuses = [
  ["available", "Vapaata"],
  ["limited", "Kysy saatavuutta"],
  ["full", "Täynnä"],
];
let selectedPickupDate = "";
const timeInput = document.createElement("input");
timeInput.type = "hidden";
timeInput.name = "time";
timeInput.id = "pickupTime";
$("orderForm").appendChild(timeInput);
document.querySelector(".calendar-section .section-top>p").textContent =
  "Paina kalenterista sopivaa noutopäivää ja valitse avautuvasta ikkunasta noutoaika.";
document.querySelector(".cal-mini").textContent = "VALITSE NOUTOAIKA";
document.querySelector(".calendar-side h3").textContent =
  "Valitse nouto helposti kalenterista.";
document.querySelector(".calendar-side>p").textContent =
  "Vihreät päivät ovat vapaana. Keltainen tarkoittaa, että varmistamme saatavuuden. Harmaat päivät eivät ole varattavissa.";
document.querySelector(".calendar-side .underlink").textContent =
  "Siirry tilaustietoihin ↗";
document.querySelector(".calendar-side .underlink").href = "#tilaus";
document.querySelector(".builder-heading .eyebrow").textContent =
  "VAIHE 1 / 4 · VALITSE KAKKU";
document
  .querySelector(".order-section")
  .insertAdjacentElement("afterend", document.querySelector(".story"));
document.querySelector('#orderForm button[type="submit"]').innerHTML =
  "Lähetä tilaus <span>↗</span>";
const pickupSlots = [
  "10.00–12.00",
  "12.00–14.00",
  "14.00–16.00",
  "16.00–18.00",
];
function formatPickupDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
function openTimeSlots() {
  $("timeSlotDate").textContent = formatPickupDate(selectedPickupDate);
  $("timeSlotGrid").innerHTML = pickupSlots
    .map(
      (time) =>
        `<button type="button" class="time-slot" data-time="${time}">${time}<span>Nouto leipomolta</span></button>`,
    )
    .join("");
  $("timeSlotDialog").showModal();
}
$("timeSlotGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-time]");
  if (!button) return;
  timeInput.value = button.dataset.time;
  $("timeSlotDialog").close();
  renderCart();
  openCart();
});
$("closeTimeSlots").addEventListener("click", () =>
  $("timeSlotDialog").close(),
);
$("timeSlotDialog").addEventListener("click", (event) => {
  if (event.target === $("timeSlotDialog")) $("timeSlotDialog").close();
});
function statusFor(d) {
  const k = isoLocal(d);
  if (overrides[k]) return overrides[k];
  const offset = Math.floor((d - initial) / 86400000);
  return offset % 11 === 0
    ? "full"
    : offset % 5 === 0
      ? "limited"
      : "available";
}
function selectPickupDate(date) {
  const code = statusFor(date);
  if (date < initial || code === "full") return;
  selectedPickupDate = isoLocal(date);
  timeInput.value = "";
  $("pickupDate").value = selectedPickupDate;
  shown = new Date(date.getFullYear(), date.getMonth(), 1);
  renderCalendar();
  openTimeSlots();
}
function renderCalendar() {
  $("monthLabel").textContent =
    monthHeading[shown.getMonth()] + " " + shown.getFullYear();
  const parent = $("weekList");
  parent.className = "week-list month-calendar";
  parent.innerHTML =
    '<div class="calendar-weekdays"><span>Ma</span><span>Ti</span><span>Ke</span><span>To</span><span>Pe</span><span>La</span><span>Su</span></div><div class="calendar-days"></div>';
  const days = parent.querySelector(".calendar-days"),
    start = mondayOf(shown);
  for (let i = 0; i < 42; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    const code = statusFor(day),
      todayOrFuture = day >= initial,
      currentMonth = day.getMonth() === shown.getMonth(),
      selected = isoLocal(day) === selectedPickupDate;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calendar-day ${code}${currentMonth ? "" : " other-month"}${selected ? " selected" : ""}`;
    button.disabled = !todayOrFuture || code === "full";
    button.innerHTML = `<span>${day.getDate()}</span><i aria-hidden="true"></i>`;
    button.setAttribute(
      "aria-label",
      `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}: ${statuses.find((item) => item[0] === code)[1]}${selected ? ", valittu noutopäivä" : ""}`,
    );
    button.addEventListener("click", () => selectPickupDate(day));
    days.appendChild(button);
  }
}
$("prevMonth").addEventListener("click", () => {
  shown = new Date(shown.getFullYear(), shown.getMonth() - 1, 1);
  renderCalendar();
});
$("nextMonth").addEventListener("click", () => {
  shown = new Date(shown.getFullYear(), shown.getMonth() + 1, 1);
  renderCalendar();
});
$("pickupDate").min = isoLocal(initial);
$("pickupDate").addEventListener("change", () => {
  if (!$("pickupDate").value) return;
  const date = new Date($("pickupDate").value + "T00:00:00");
  if (statusFor(date) !== "full") {
    selectedPickupDate = $("pickupDate").value;
    shown = new Date(date.getFullYear(), date.getMonth(), 1);
    renderCalendar();
  }
});
renderCalendar();
const escapeHtml = (value) =>
  String(value || "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
$("orderForm").addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!cart.length) {
      openCart();
      alert("Lisää vähintään yksi kakku ostoskoriin ennen maksua.");
      return;
    }
    if (!timeInput.value) {
      document
        .querySelector(".calendar-section")
        .scrollIntoView({ behavior: "smooth" });
      alert("Valitse ensin noutopäivä kalenterista ja sen jälkeen noutoaika.");
      return;
    }
    const fd = new FormData(e.currentTarget),
      name = escapeHtml(fd.get("name")),
      date = escapeHtml(fd.get("date")),
      time = escapeHtml(timeInput.value),
      email = escapeHtml(fd.get("email")),
      phone = escapeHtml(fd.get("phone")),
      message = escapeHtml(fd.get("message"));
    const cartLines = cart
      .map(
        (item) =>
          `${item.quantity} × ${item.title} (${item.price * item.quantity} €)`,
      )
      .join("<br />");
    const orderTotal = cartSum();
    const modal = $("previewDialog").querySelector(".modal");
    modal.innerHTML = `<button class="close-modal" id="closePayment" aria-label="Sulje">✕</button><div class="eyebrow">VAIHE 4 / 4 · VAHVISTA TILAUS</div><h2>Tarkista ja <em>lähetä.</em></h2><p>Tilauksesi tallentuu BakeVyn hallintanäkymään. Maksu suoritetaan noudettaessa.</p><div class="confirmation-box"><b>${name}</b><br>Nouto: ${date} klo ${time}<br>Sähköposti: ${email}<br><br><b>Ostoskorisi</b><br>${cartLines}</div><div class="payment-total">${orderTotal} €</div><button type="button" class="btn btn-dark full" id="confirmPayment">Lähetä tilaus <span>↗</span></button><p class="payment-note">Maksu suoritetaan noudettaessa.</p>`;
    $("previewDialog").showModal();
    $("closePayment").addEventListener("click", closeDialog);
    $("confirmPayment").addEventListener("click", () => {
      const orderKey = "bakevy-demo-orders-v1";
      const inspirationImages = [
        ...document.querySelectorAll(".image-slot img"),
      ]
        .filter((image) => !image.hidden && image.src.startsWith("data:image/"))
        .map((image) => image.src);
      let savedOrders = [];
      try {
        savedOrders = JSON.parse(localStorage.getItem(orderKey) || "[]") || [];
      } catch (error) {}
      savedOrders.push({
        id: `BV-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        name,
        email,
        phone,
        message,
        date,
        time,
        total: orderTotal,
        status: "Uusi",
        images: inspirationImages,
        items: cart.map((item) => ({
          title: item.title,
          size: item.size,
          base: item.base,
          filling: item.filling,
          decoration: item.decoration,
          customNote: item.customNote,
          referenceImage: item.referenceImage,
          price: item.price,
          quantity: item.quantity,
        })),
      });
      try {
        localStorage.setItem(orderKey, JSON.stringify(savedOrders));
      } catch (error) {}
      modal.innerHTML = `<button class="close-modal" id="closePayment" aria-label="Sulje">✕</button><div class="eyebrow">TILAUS VASTAANOTETTU</div><h2>Kiitos, ${name} ♡</h2><p>Tilauksesi on vastaanotettu. Maksu suoritetaan noudettaessa.</p><div class="confirmation-box"><b>Noutoajankohta</b><br>${date} klo ${time}<br><br><b>Tilauksesi</b><br>${cartLines}<br><br><b>Noutopaikka</b><br>[Lisää vahvistettu nouto-osoite ennen julkaisua], Oulu</div><p class="payment-note">Jos haluat vielä muutoksia tilaukseesi ennen noutoa tai muuttaa noutoaikaa, olethan yhteydessä.</p><a class="underlink" href="#yhteys" id="confirmationContact">Yhteystiedot <span>↘</span></a><br><br><button type="button" class="btn btn-dark" id="finishOrder">Valmis</button>`;
      cart = [];
      saveCart();
      renderCart();
      $("closePayment").addEventListener("click", closeDialog);
      $("finishOrder").addEventListener("click", closeDialog);
      $("confirmationContact").addEventListener("click", closeDialog);
    });
  },
  true,
);
function closeDialog() {
  $("previewDialog").close();
}
function returnToStart() {
  closeDialog();
  $("alku").scrollIntoView({ behavior: "smooth" });
}
$("closeModal").addEventListener("click", closeDialog);
$("dismissModal").addEventListener("click", closeDialog);
$("previewDialog").addEventListener("click", (e) => {
  if (e.target === $("previewDialog")) closeDialog();
});
$("copyOrder").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($("previewText").textContent);
    $("copyOrder").textContent = "Kopioitu ✓";
  } catch (e) {
    const r = document.createRange();
    r.selectNodeContents($("previewText"));
    getSelection().removeAllRanges();
    getSelection().addRange(r);
    $("copyOrder").textContent = "Valitse teksti ja kopioi";
  }
});

renderCart();
updateCake();

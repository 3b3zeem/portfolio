let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
};

let section = document.querySelector(".heading");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop + 100) {
        console.log("Reached");
        spans.forEach((spans) => {
            spans.style.width = spans.dataset.width;
        });
    }
};

let dark = document.querySelector("body");
function color(c) {
    dark.style.background = c;
}

let light = document.querySelector("body");
function color(c) {
    light.style.background = c;
}

let p = document.querySelector(".info");
function colorp(co) {
    p.style.color = co;
}

let text = document.querySelector(".home .content .text");
function colorte(te) {
    text.style.color = te;
}

let h3 = document.querySelector("h3");
function colorh(h) {
    h3.style.color = h;
}

let b = document.querySelectorAll(".heading");
function colorhp(hp) {
    b.forEach((b) => {
        b.style.color = hp;
    });
}

let pr = document.querySelector(".row-1 .content h3");
function colorbr(br) {
    pr.style.color = br;
}

let pre = document.querySelector(".row-1 .content p");
function colorbre(bre) {
    pre.style.color = bre;
}

let pro = document.querySelectorAll(".progress h3");
function colorb(b) {
    pro.forEach((pro) => {
        pro.style.color = b;
    });
}

let box = document.querySelectorAll(".box-container .box p");
function colorbox(bo) {
    box.forEach((box) => {
        box.style.color = bo;
    });
}

let skills = document.querySelectorAll(".row-2 .box-container .box p");
function colorboc(boc) {
    skills.forEach((skills) => {
        skills.style.color = boc;
    });
}
let skills1 = document.querySelectorAll(".row-2 .box-container .box");
function colorboc1(boc1) {
    skills1.forEach((skills1) => {
        skills1.style.background = boc1;
    });
}
let skills2 = document.querySelectorAll(".row-2 .box-container .box p");
function colorboc2(boc2) {
    skills2.forEach((skills2) => {
        skills2.style.color = boc2;
    });
}


let service = document.querySelectorAll(".service .box-container .box p");
function colorser(ser) {
    service.forEach((service) => {
        service.style.color = ser;
    });
}

let service1 = document.querySelectorAll(".service .box-container .box");
function colorser1(ser1) {
    service1.forEach((service1) => {
        service1.style.background = ser1;
    });
}

let service2 = document.querySelectorAll(".service .box-container .box h3");
function colorser2(ser2) {
    service2.forEach((service2) => {
        service2.style.color = ser2;
    });
}

let exper = document.querySelectorAll(".experience .box-container .box .content");
function colorexper(ex) {
    exper.forEach((exper) => {
        exper.style.background = ex;
    });
}
let exper1 = document.querySelectorAll(".experience .box-container .box .content h3");
function colorexper1(ex1) {
    exper1.forEach((exper1) => {
        exper1.style.color = ex1;
    });
}

let portfolio = document.querySelectorAll(".portfolio .box-container .box");
function colorportfolio(port) {
    portfolio.forEach((portfolio) => {
        portfolio.style.backgroundColor = port;
    });
}
let portfolio2 = document.querySelectorAll(".portfolio .box-container .box");
function colorportfolio2(port2) {
    portfolio2.forEach((portfolio2) => {
        portfolio2.style.border = port2;
    });
}
let portfolio1 = document.querySelectorAll(".portfolio .box-container .box h3");
function colorportfolio1(port1) {
    portfolio1.forEach((portfolio1) => {
        portfolio1.style.color = port1;
    });
}

let contact = document.querySelectorAll(".contact .icons-container .icons");
function coloricons(cont) {
    contact.forEach((contact) => {
        contact.style.background = cont;
    });
}
let contact1 = document.querySelectorAll(".contact .icons-container .icons h3");
function coloricons1(cont1) {
    contact1.forEach((contact1) => {
        contact1.style.color = cont1;
    });
}
let contact2 = document.querySelectorAll(".contact .row form");
function colorrow(cont2) {
    contact2.forEach((contact2) => {
        contact2.style.background = cont2;
    });
}
let contact3 = document.querySelectorAll(".contact .row form .box");
function colorrow1(cont3) {
    contact3.forEach((contact3) => {
        contact3.style.background = cont3;
    });
}
let contact4 = document.querySelectorAll(".contact .row form textarea");
function colorrow2(cont4) {
    contact4.forEach((contact4) => {
        contact4.style.background = cont4;
    });
}
let contact7 = document.querySelectorAll(".contact .row form textarea");
function colorrow5(cont7) {
    contact7.forEach((contact7) => {
        contact7.style.color = cont7;
    });
}
let contact8 = document.querySelectorAll(".contact .row form .box");
function colorrow6(cont8) {
    contact8.forEach((contact8) => {
        contact8.style.color = cont8;
    });
}
let contact5 = document.querySelectorAll(".footer");
function colorrow3(cont5) {
    contact5.forEach((contact5) => {
        contact5.style.background = cont5;
    });
}
let contact6 = document.querySelectorAll(".footer");
function colorrow4(cont6) {
    contact6.forEach((contact6) => {
        contact6.style.color = cont6;
    });
}
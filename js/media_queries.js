const mq_992 = window.matchMedia("(max-width: 992px)");
const mq_768 = window.matchMedia("(max-width: 768px)");
const mq_600 = window.matchMedia("(max-width: 600px)");

//todo Handling changes on viewport of 992 and lower
const doSomethingOnViewPort992AndLower = (test) => {
    if (test.matches) {
        nayaImageContWithCaptionMin.style.display = "none";
        nayaImageContWithCaptionMax.style.width = "39%";
        skillsEducation.style.width = "49%";
        copyright.style.fontSize = ".6rem";
        hireMe.style.fontSize = ".6rem";
        copyright.style.padding = "5px 0 0 10px";
        hireMe.style.padding = "5px 10px 0 0";
    } else {
        nayaImageContWithCaptionMin.style.display = "block";
        nayaImageContWithCaptionMax.style.width = "35%";
        skillsEducation.style.width = "45%";
        copyright.style.fontSize = ".7rem";
        hireMe.style.fontSize = ".7rem";
        copyright.style.padding = "3px 0 0 10px";
        hireMe.style.padding = "3px 10px 0 0";
    }
};

doSomethingOnViewPort992AndLower(mq_992);
mq_992.addListener(doSomethingOnViewPort992AndLower);

//todo Handling changes on viewport of 768 and lower
const doSomethingOnViewPort768AndLower = (test) => {
    if (test.matches) {
        titleInFooter.textContent = "WYCBW";
        hireMe.querySelector("div.hire a").textContent = "My Email";
        hireMe.querySelector("div.hire a").title =
            "prateekrohilla4.pr@gmail.com";
        copyright.style.fontSize = ".7rem";
        hireMe.style.fontSize = ".7rem";
        explorer.style.display = "none";
        Array.from(lineNumbersDivs).forEach((div) => {
            div.style.width = "7.5%";
            Array.from(div.querySelectorAll("ul li")).forEach((num) => {
                num.style.fontSize = "0.5rem";
            });
        });
        editCont.style.width = "100%";
    } else {
        titleInFooter.textContent = "Prateek Rohilla";
        hireMe.querySelector("div.hire a").textContent =
            "prateekrohilla4.pr@gmail.com";
        copyright.style.fontSize = ".5rem";
        hireMe.style.fontSize = ".5rem";
        handleSocialIconAnimation();
        explorer.style.display = "flex";
        // editCont.style.width = "95%";
        Array.from(lineNumbersDivs).forEach((div) => {
            div.style.width = "5%";
            Array.from(div.querySelectorAll("ul li")).forEach((num) => {
                num.style.fontSize = "1rem";
            });
        });
    }
};

doSomethingOnViewPort768AndLower(mq_768);
mq_768.addListener(doSomethingOnViewPort768AndLower);

//todo Handling changes on viewport of 600 and lower
const doSomethingOnViewPort600AndLower = (test) => {
    if (test.matches) {
        nayaImageContWithCaptionMax.querySelector(
            "div.name-wrapper "
        ).style.fontSize = ".8rem";
        nayaImageContWithCaptionMax.querySelector(
            "div.about-wrapper span, p.about"
        ).style.fontSize = ".8rem";

        Array.from(dividers).forEach((divider) => {
            divider.style.fontSize = ".8rem";
        });
        education.querySelector("div.fs .fs-logo").style.width = "20px";
        education.querySelector("div.fs .fs-title").style.fontSize = ".8rem";
        Array.from(education.querySelectorAll("div.ed-icon i")).forEach((icon) => {
            icon.style.fontSize = ".7rem";
        });
        Array.from(education.querySelectorAll("div.award-info")).forEach(
            (award) => {
                award.style.fontSize = ".8rem";
            }
        );
    } else {
        nayaImageContWithCaptionMax.querySelector(
            "div.name-wrapper "
        ).style.fontSize = "1rem";
        nayaImageContWithCaptionMax.querySelector(
            "div.about-wrapper span, p.about"
        ).style.fontSize = "1rem";
        Array.from(dividers).forEach((divider) => {
            divider.style.fontSize = "1rem";
        });
        education.querySelector("div.fs .fs-logo").style.width = "30px";
        education.querySelector("div.fs .fs-title").style.fontSize = "1rem";
        Array.from(education.querySelectorAll("div.ed-icon i")).forEach((icon) => {
            icon.style.fontSize = "1.2rem";
        });
    }
};

doSomethingOnViewPort600AndLower(mq_600);
mq_600.addListener(doSomethingOnViewPort600AndLower);
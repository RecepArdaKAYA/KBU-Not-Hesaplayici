document.addEventListener("DOMContentLoaded", () => {
    const hesaplaBtn = document.getElementById("hesaplaBtn");
    const sifirlaBtn = document.getElementById("sifirlaBtn");
    const hataDiv = document.getElementById("hata");
    const sonucDiv = document.getElementById("sonuc");

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") hesapla();
    });

    hesaplaBtn.addEventListener("click", hesapla);
    sifirlaBtn.addEventListener("click", sifirla);

    function hataGoster(msg) {
        hataDiv.textContent = msg;
        hataDiv.classList.remove("hidden");
        sonucDiv.classList.add("hidden");
    }

    function sifirla() {
        hataDiv.classList.add("hidden");
        sonucDiv.classList.add("hidden");
        document.querySelectorAll("input").forEach(i => i.value = "");
        document.getElementById("devamsiz").checked = false;
        document.getElementById("sinavDurumu").value = "evet";
    }

    function hesapla() {
        hataDiv.classList.add("hidden");

        const devamsiz = document.getElementById("devamsiz").checked;
        const sinavDurumu = document.getElementById("sinavDurumu").value;
        const vizeVal = document.getElementById("vize").value.trim();
        const yilIciVal = document.getElementById("yilIci").value.trim();
        const finalVal = document.getElementById("final").value.trim();
        const butVal = document.getElementById("butunleme").value.trim();

        if (devamsiz) {
            goster("-", "F1", "Kaldı", "Devamsız olduğunuz için F1.");
            return;
        }

        if (sinavDurumu === "hayir") {
            goster("-", "F2", "Kaldı", "Sınava girilmediği için F2.");
            return;
        }

        if (vizeVal === "") {
            hataGoster("Vize notu gereklidir.");
            return;
        }

        const vize = Number(vizeVal);
        if (isNaN(vize) || vize < 0 || vize > 100) {
            hataGoster("Vize 0 ile 100 arasında olmalıdır.");
            return;
        }

        let yilIci = vize;
        if (yilIciVal !== "") {
            const y = Number(yilIciVal);
            if (isNaN(y) || y < 0 || y > 100) {
                hataGoster("Yıl içi çalışma 0 ile 100 arasında olmalıdır.");
                return;
            }
            yilIci = (vize + y) / 2;
        }

        let sinav;
        if (butVal !== "") {
            const b = Number(butVal);
            if (isNaN(b) || b < 0 || b > 100) {
                hataGoster("Bütünleme 0 ile 100 arasında olmalıdır.");
                return;
            }
            sinav = b;
        } else {
            if (finalVal === "") {
                hataGoster("Final veya bütünleme girilmelidir.");
                return;
            }
            const f = Number(finalVal);
            if (isNaN(f) || f < 0 || f > 100) {
                hataGoster("Final 0 ile 100 arasında olmalıdır.");
                return;
            }
            sinav = f;
        }

        const basari = 0.40 * yilIci + 0.60 * sinav;
        const yuvarlanmis = Number(basari.toFixed(2));

        let harf = "", durum = "", aciklama = "";

        if (sinav < 50) {
            harf = "F3";
            durum = "Kaldı";
            aciklama = `Sınav notu (${sinav}) < 50 olduğu için F3.`;
        } else if (yuvarlanmis < 60) {
            harf = "F3";
            durum = "Kaldı";
            aciklama = `Başarı notu (${yuvarlanmis}) < 60 olduğu için F3.`;
        } else {
            durum = "Geçti";
            if (yuvarlanmis >= 90) harf = "A1";
            else if (yuvarlanmis >= 80) harf = "A2";
            else if (yuvarlanmis >= 70) harf = "B1";
            else if (yuvarlanmis >= 65) harf = "B2";
            else harf = "C";
            aciklama = `Tebrikler, ${harf} ile geçtiniz.`;
        }

        goster(yuvarlanmis, harf, durum, aciklama);
    }

    function goster(b, h, d, a) {
        document.getElementById("resBasari").textContent = b;
        document.getElementById("resHarf").textContent = h;
        document.getElementById("resDurum").textContent = d;
        document.getElementById("resAciklama").textContent = a;
        sonucDiv.classList.remove("hidden");
    }
});
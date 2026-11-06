# KBÜ Standartlarına Uygun Not Hesaplayıcı

## KBÜ Kurallarına Göre Hesap Mantığı

* Ağırlık Oranları: Ders başarı notu hesaplanırken yıl içi (ara sınav + çalışmalar) %40, genel sınav veya bütünleme %60 oranında etki eder. Eğer "Bütünleme" notu girilmişse, final notunun yerine geçer ve hesaplamada %60 ağırlıkla baz alınır.
* Geçme ve Başarı Koşulları: Bir öğrencinin dersten başarılı (geçti) sayılabilmesi için iki temel koşulu aynı anda sağlaması zorunludur:
  1. Genel sınav veya bütünleme notunun en az 50 (≥ 50) olması,
  2. Hesaplanan ders başarı notunun en az 60 (≥ 60) olması.
* Harf Notu Aralıkları:
  * 90 – 100 → A1 (4.00) — Geçer
  * 80 – 89 → A2 (3.50) — Geçer
  * 70 – 79 → B1 (3.00) — Geçer
  * 65 – 69** → B2 (2.75) — Geçer
  * 60 – 64 → C (2.50) — Geçer
* Özel Durumlar (Kalanlar):
  * F1: Devamsızlık durumu (Genel/bütünleme hakkı yok, katsayı 0).
  * F2: Devam var ancak genel/bütünleme sınavına girilmemiş (Katsayı 0).
  * F3: Sınav notunun 50'den küçük olması veya başarı notunun 60'ın altında kalması durumu (Katsayı 0).

 # Kullanım Talimatı:
Projeyi bilgisayarınıza indirin.

index.html dosyasını herhangi bir web tarayıcısında (Google Chrome, Firefox, Microsoft Edge vb.) açın.

Form alanlarına vize, yıl içi çalışma (isteğe bağlı), final veya bütünleme notlarını girin.

Devamsızlık veya sınava girme durumunu ilgili seçenekleri belirleyin.

"Hesapla" butonuna tıklayın.

Sonuçları ekranda izleyebilirsiniz. İhtiyaç halinde "Sıfırla" butonu ile alanları temizleyebilirsiniz.

# Test Senaryoları ve Beklenen Sonuçlar

Senaryo                       Girdiler                        Beklenen Sonuç / Açıklama

1. Normal Geçiş (C)         Yıl içi:70, Final:60              Başarı:64 -> C, Geçti (Tüm koşullar sağlandı)
2. Sınav Barajı Altı (F3)   Yıl içi:95, Final:48              Final <50 olduğu için -> F3 (Kaldı)
3. Bütünleme ile Başarı     Yıl içi:58,                       Sınav:55, Başarı 56.2 -> Başarı <60 olduğu için F3 (Kaldı)
   sınırı Altı (F3)         Bütünleme:55 (Final boş)
4. Devamsızlık (F1)         "Devamsızım" kutucuğu işaretli    Doğrudan -> F1 (Kaldı)
5. Sınava Girmedi (F2)      Sınava Girdim: Hayır              Doğrudan -> F2 (Kaldı)
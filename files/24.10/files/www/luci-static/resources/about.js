const container = document.getElementById('app-container'); const content = `
<style>:root{--qr-accent:#8a2be2;--qr-accent-2:#006786}.qr-section{display:flex;justify-content:center;margin-top:28px;padding:0 12px}.qr-card{position:relative;width:100%;max-width:380px;border-radius:18px;padding:18px;background:#0f1320;color:#e8ecf1;box-shadow:0 8px 24px rgb(0 0 0 / .22);overflow:hidden;isolation:isolate}.qr-card::before{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(135deg,var(--qr-accent-2),var(--qr-accent-2));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;z-index:-1}.qr-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}.qr-badge{font-size:12px;letter-spacing:.4px;text-transform:uppercase;padding:4px 8px;border-radius:999px;background:rgb(138 43 226 / .15);border:1px solid rgb(138 43 226 / .35)}.qr-title{margin:0 0 2px 0;font-weight:700;font-size:16px}.qr-subtitle{margin:0;font-size:12px;color:#a9b3c4}.qr-wrap{position:relative;display:grid;place-items:center;margin:10px 0 14px}.qr-img{width:280px;max-width:78vw;aspect-ratio:1/1;background:#fff;border-radius:14px;padding:12px;box-shadow:inset 0 0 0 1px rgb(0 0 0 / .06);image-rendering:pixelated}.scanline{position:absolute;top:-20%;left:10%;right:10%;height:38px;border-radius:12px;background:linear-gradient(180deg,#fff0 0%,rgb(37 211 102 / .25) 50%,#fff0 100%);filter:blur(1px);animation:sweep 3.2s linear infinite;pointer-events:none}@keyframes sweep{0%{transform:translateY(0);opacity:.5}100%{transform:translateY(260px);opacity:.15}}.qr-help{text-align:center;font-size:12px;color:#cbd3df;margin-bottom:12px}.qr-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}.qr-actions a,.qr-actions button{appearance:none;border:none;cursor:pointer;padding:10px 14px;border-radius:12px;font-weight:600;font-size:14px;background:#1b2236;color:#e8ecf1;box-shadow:0 2px 0 rgb(255 255 255 / .06) inset,0 6px 16px rgb(0 0 0 / .18);transition:transform .06s ease,background .2s ease,box-shadow .2s ease}.qr-actions a.primary{background:linear-gradient(135deg,var(--qr-accent),var(--qr-accent-2));color:#0b0f19}.qr-actions a:hover,.qr-actions button:hover{transform:translateY(-1px)}.qr-modal{position:fixed;inset:0;display:none;place-items:center;background:rgb(8 10 16 / .6);z-index:9999;padding:18px}.qr-modal.open{display:grid}.qr-modal-content{background:#0f1320;border-radius:18px;padding:16px;width:min(92vw, 520px);box-shadow:0 12px 28px rgb(0 0 0 / .35)}.qr-modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#e8ecf1;font-weight:700}.qr-modal-content img{width:100%;background:#fff;border-radius:14px;padding:14px;aspect-ratio:1/1}.qr-close{background:#fff0;border:none;color:#e8ecf1;font-size:22px;cursor:pointer;line-height:1}@media (max-width:420px){.qr-img{width:240px}}.social-links{display:flex;flex-wrap:wrap;justify-content:center;margin-top:20px;gap:15px}.social-links a{text-decoration:none;color:#fff;padding:5px;border-radius:10px 10px;font-size:14px;display:flex;align-items:center;justify-content:center;gap:10px;flex:1 1 calc(50% - 30px);max-width:40px}.social-links a svg{width:24px;height:24px}.social-links a svg path{fill:#fff}.whatsapp{background:#25D366}.telegram{background:#08c}.facebook{background:#3f8bff}.youtube{background:red}</style>
<div class="container">
  <h2 class="my-2">
    <center>
      <strong>Welcome To Mutiara-Wrt</strong>
  </h2>
  <br>
  <p>
    <center>
      <strong>Mutiara-Wrt</strong> adalah firmware OpenWrt yang dikembangkan untuk memenuhi kebutuhan Hotspot dan PPPoE tanpa <strong>MikroTik</strong>
      <br> dengan integrasi <em>
        <strong>Freeradius</strong>
      </em> dan <em>
        <strong>Coova-Chilli</strong>
      </em>.
  </p>
  <br>
  <p>
    <center>Dirancang untuk memberikan pengalaman jaringan yang aman dan terkontrol, <strong>Mutiara-Wrt</strong> memudahkan pengelolaan Hotspot dan PPPoE melalui UI <em>
        <strong>RadMon V2</strong>
      </em>, memastikan setiap koneksi aman dan terverifikasi.
  </p>
  <br> Base Firmware OpenWrt Source <strong>24.10.3</strong>
  <br> OpenWrt Build <strong>24.10.3 Stable</strong>
  </p>
  <br>
  <p>
    <center> Jika Anda ingin belajar lebih lanjut tentang <strong>Mutiara-Wrt</strong>, join komunitas kami melalui link di bawah ini.
  </p>
  <div class="social-links">
    <!-- WhatsApp -->
    <a href="https://wa.me/6285372687484" class="whatsapp" target="_blank" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
    <!-- Telegram -->
    <a href="https://t.me/mutiarawrt" class="telegram" target="_blank" aria-label="Telegram">
      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Telegram</title>
        <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
      </svg>
    </a>
    <!-- Facebook -->
    <a href="https://facebook.com/maizil.41" class="facebook" target="_blank" aria-label="Facebook">
      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Facebook</title>
        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
      </svg>
    </a>
    <!-- YouTube -->
    <a href="https://youtube.com/@mutiara-wrt" class="youtube" target="_blank" aria-label="YouTube">
      <svg viewBox="0 0 32 32" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>YouTube</title>
        <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
      </svg>
    </a>
  </div>
  <div class="qr-section">
    <figure class="qr-card">
      <div class="qr-header">
        <span class="qr-badge">QRIS</span>
      </div>
      <figcaption>
        <h3 class="qr-title">Dukungan untuk Mutiara-Wrt</h3>
        <p class="qr-subtitle">Pindai dengan aplikasi bank/e-wallet Anda</p>
      </figcaption>
      <div class="qr-wrap">
        <img class="qr-img" src="/luci-static/resources/assets/img/qris.png" alt="QRIS Mutiara-Wrt" loading="lazy" decoding="async">
        <div class="scanline" aria-hidden="true"></div>
      </div>
      <p class="qr-help">Jika kamera sulit fokus, tekan “Perbesar” atau unduh gambar untuk dipindai dari galeri.</p>
      <div class="qr-actions">
        <a class="primary" href="/luci-static/resources/assets/img/qris.png" download="QRIS-MutiaraWrt.png">Unduh PNG</a>
        <button type="button" onclick="document.getElementById('qrModal').classList.add('open')">Perbesar</button>
      </div>
    </figure>
  </div>
  <!-- Modal -->
  <div id="qrModal" class="qr-modal" onclick="if(event.target.id==='qrModal') this.classList.remove('open')">
    <div class="qr-modal-content" role="dialog" aria-modal="true" aria-label="QRIS Mutiara-Wrt">
      <div class="qr-modal-header">
        <span>QRIS Mutiara-Wrt</span>
        <button class="qr-close" aria-label="Tutup" onclick="document.getElementById('qrModal').classList.remove('open')">×</button>
      </div>
      <img src="/luci-static/resources/assets/img/qris.png" alt="QRIS Mutiara-Wrt (besar)">
    </div>
  </div>
`; container.innerHTML = content;
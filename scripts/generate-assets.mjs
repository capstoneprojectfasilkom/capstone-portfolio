import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');
const clientsDir = path.join(imagesDir, 'clients');
const teamDir = path.join(imagesDir, 'team');
const portfolioDir = path.join(imagesDir, 'portfolio');
const testimonialsDir = path.join(imagesDir, 'testimonials');

[publicDir, imagesDir, clientsDir, teamDir, portfolioDir, testimonialsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper SVG generator
function createSvgBadge(text, bgColor = '#0080ff', textColor = '#ffffff', width = 400, height = 300) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/4}" fill="rgba(255,255,255,0.15)"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-weight="bold" font-size="20">${text}</text>
  </svg>`;
}

// 1. Logos
const fasilkomLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="60" viewBox="0 0 220 60">
  <rect width="44" height="44" x="8" y="8" rx="12" fill="#0080ff"/>
  <path d="M22 20 L38 20 L38 24 L26 24 L26 28 L36 28 L36 32 L26 32 L26 40 L22 40 Z" fill="#ffffff"/>
  <text x="64" y="32" font-family="sans-serif" font-weight="bold" font-size="16" fill="#000000">CAPSTONE PROJECT</text>
  <text x="64" y="46" font-family="sans-serif" font-weight="600" font-size="12" fill="#0080ff">FASILKOM UNEJ</text>
</svg>`;
fs.writeFileSync(path.join(imagesDir, 'fasilkom-logo.svg'), fasilkomLogoSvg);

// 2. Client Logos (9 Trusted Mitra & Industries)
const clients = [
  { id: 1, name: 'KPRI UNEJ', tag: 'Koperasi & Usaha', bg: '#0284c7', icon: '🏦' },
  { id: 2, name: 'Kopi Raisa', tag: 'Produk & UMKM', bg: '#b45309', icon: '☕' },
  { id: 3, name: 'BAPPEDA Jember', tag: 'Pemerintah Daerah', bg: '#0080ff', icon: '🏛️' },
  { id: 4, name: 'RSD Balung', tag: 'Layanan Kesehatan', bg: '#059669', icon: '🏥' },
  { id: 5, name: 'RSD Kalisat', tag: 'Layanan Kesehatan', bg: '#0d9488', icon: '🩺' },
  { id: 6, name: 'Nusantara Tama', tag: 'Mitra Industri', bg: '#334155', icon: '🏢' },
  { id: 7, name: 'SPI UNEJ', tag: 'Unit Internal Kampus', bg: '#4f46e5', icon: '🛡️' },
  { id: 8, name: 'BAPPERIDA Lumajang', tag: 'Pemerintah Daerah', bg: '#1e40af', icon: '📊' },
  { id: 9, name: 'FKIP UNEJ', tag: 'Fakultas UNEJ', bg: '#2563eb', icon: '🎓' }
];

clients.forEach((client) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="90" viewBox="0 0 240 90">
    <rect width="100%" height="100%" rx="16" fill="#ffffff" stroke="#8c9baa" stroke-width="1"/>
    <rect x="12" y="15" width="60" height="60" rx="12" fill="${client.bg}"/>
    <text x="42" y="52" dominant-baseline="middle" text-anchor="middle" font-size="28">${client.icon}</text>
    <text x="84" y="42" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000000">${client.name}</text>
    <text x="84" y="58" font-family="sans-serif" font-weight="500" font-size="11" fill="#636f7b">${client.tag}</text>
  </svg>`;
  fs.writeFileSync(path.join(clientsDir, `client-${client.id}.svg`), svg);
});

// 3. Team Avatars
const teamMembers = [
  { name: 'Dr. Eng. Ahmad Subagio', role: 'Dosen Pembimbing' },
  { name: 'Rian Febrian', role: 'Project Manager' },
  { name: 'Siti Nurhaliza', role: 'Backend Lead' },
  { name: 'Budi Santoso', role: 'Frontend Lead' },
  { name: 'Dewi Anggraini', role: 'UI UX Designer' },
  { name: 'Fikri Haikal', role: 'QA & Tester' },
  { name: 'Aditya Pratama', role: 'DevOps Engineer' }
];

teamMembers.forEach((member, idx) => {
  const colors = ['#0080ff', '#0050ff', '#636f7b', '#222222', '#0080ff', '#8c9baa', '#0050ff'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="100%" height="100%" fill="${colors[idx % colors.length]}"/>
    <circle cx="150" cy="110" r="50" fill="#ffffff" opacity="0.9"/>
    <path d="M70 250 C70 190, 230 190, 230 250 Z" fill="#ffffff" opacity="0.9"/>
    <rect x="0" y="240" width="300" height="60" fill="rgba(0,0,0,0.4)"/>
    <text x="150" y="275" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="16">${member.name}</text>
  </svg>`;
  fs.writeFileSync(path.join(teamDir, `team-${idx + 1}.svg`), svg);
});

// 4. Portfolio Thumbnails (17 Real Capstone Projects with Rich UI App Previews)
const portfolioItems = [
  { id: 1, title: "Website & Marketplace Kopi Raisa", cat: "Web Application", bg: "#78350f", theme: "#b45309" },
  { id: 2, title: "Sistem Marketplace Android", cat: "Mobile App", bg: "#0284c7", theme: "#0080ff" },
  { id: 3, title: "Website Sekolah Kopi Raisa", cat: "Web Application", bg: "#92400e", theme: "#d97706" },
  { id: 4, title: "Data Bahan Pokok - Cinta Ekonomi", cat: "Enterprise System", bg: "#065f46", theme: "#059669" },
  { id: 5, title: "Sistem Informasi Koperasi Produk", cat: "Enterprise System", bg: "#0369a1", theme: "#0284c7" },
  { id: 6, title: "Website Profile RSD Balung", cat: "Web Application", bg: "#115e59", theme: "#0d9488" },
  { id: 7, title: "Sistem Informasi Tugas Akhir", cat: "Web Application", bg: "#3730a3", theme: "#4f46e5" },
  { id: 8, title: "Space Management System", cat: "Enterprise System", bg: "#1e293b", theme: "#475569" },
  { id: 9, title: "Auro Application", cat: "Mobile App", bg: "#1e40af", theme: "#2563eb" },
  { id: 10, title: "Sistem Informasi Pegawai", cat: "Enterprise System", bg: "#1e3a8a", theme: "#1d4ed8" },
  { id: 11, title: "SIM Gudang & Pengambilan Keputusan", cat: "GIS & Data Analytics", bg: "#5b21b6", theme: "#7c3aed" },
  { id: 12, title: "Single Sign-on (SSO) System", cat: "System Integration", bg: "#0369a1", theme: "#0080ff" },
  { id: 13, title: "Geoportal Lumajang Spasial", cat: "GIS & Data Analytics", bg: "#064e3b", theme: "#047857" },
  { id: 14, title: "Manajemen Risiko Proses Audit", cat: "Enterprise System", bg: "#991b1b", theme: "#dc2626" },
  { id: 15, title: "Sistem Inventory & Peminjaman LAB", cat: "Enterprise System", bg: "#075985", theme: "#0284c7" },
  { id: 16, title: "Sistem Pendaftaran Magang Kampus", cat: "Web Application", bg: "#1e40af", theme: "#2563eb" },
  { id: 17, title: "Sistem Manajemen Prestasi Mahasiswa", cat: "Web Application", bg: "#854d0e", theme: "#ca8a04" }
];

portfolioItems.forEach((item) => {
  const { id, title, cat, bg, theme } = item;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    {/* Base Gradient Background */}
    <rect width="600" height="400" fill="${bg}"/>
    
    {/* Web Browser / App Mockup Window Frame */}
    <rect x="24" y="24" width="552" height="300" rx="16" fill="#ffffff" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    
    {/* Browser Top Navigation Bar */}
    <rect x="24" y="24" width="552" height="40" rx="16" fill="#f1f5f9"/>
    <circle cx="48" cy="44" r="6" fill="#ff5f56"/>
    <circle cx="68" cy="44" r="6" fill="#ffbd2e"/>
    <circle cx="88" cy="44" r="6" fill="#27c93f"/>
    <rect x="110" y="34" width="280" height="20" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="122" y="48" font-family="sans-serif" font-size="10" fill="#64748b">https://${title.toLowerCase().replace(/[^a-z0-9]/g, '')}.fasilkom.unej.ac.id</text>
    
    {/* Hero App Banner UI */}
    <rect x="48" y="80" width="200" height="22" rx="6" fill="${theme}"/>
    <rect x="48" y="112" width="310" height="10" rx="5" fill="#cbd5e1"/>
    <rect x="48" y="128" width="220" height="10" rx="5" fill="#e2e8f0"/>
    
    {/* Product / UI Content Grid Preview Cards */}
    <rect x="48" y="156" width="155" height="140" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="60" y="168" width="131" height="64" rx="8" fill="${theme}" opacity="0.85"/>
    <rect x="60" y="242" width="105" height="10" rx="4" fill="#0f172a"/>
    <rect x="60" y="260" width="75" height="8" rx="4" fill="#64748b"/>
    
    <rect x="218" y="156" width="155" height="140" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="230" y="168" width="131" height="64" rx="8" fill="${theme}" opacity="0.65"/>
    <rect x="230" y="242" width="105" height="10" rx="4" fill="#0f172a"/>
    <rect x="230" y="260" width="75" height="8" rx="4" fill="#64748b"/>

    {/* Analytics / Sidebar Section Preview */}
    <rect x="388" y="80" width="172" height="216" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="402" y="96" width="144" height="18" rx="5" fill="${theme}"/>
    <rect x="402" y="124" width="144" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="402" y="174" width="144" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <rect x="402" y="224" width="144" height="42" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>

    {/* Bottom Dark Branding Overlay */}
    <rect x="0" y="330" width="600" height="70" fill="#0f172a"/>
    <text x="24" y="358" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="16">${title}</text>
    <text x="24" y="380" fill="#94a3b8" font-family="sans-serif" font-weight="500" font-size="12">${cat} • Capstone Project Fasilkom UNEJ</text>
  </svg>`;
  fs.writeFileSync(path.join(portfolioDir, `project-${id}.svg`), svg);
});

// 5. Testimonial Avatars
const clientTestimonials = ['Drs. Bambang Irawan', 'Hj. Ratna Sari, M.T.', 'Hendra Wijaya'];
clientTestimonials.forEach((name, idx) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="60" fill="#0080ff"/>
    <circle cx="60" cy="45" r="22" fill="#ffffff"/>
    <path d="M25 105 C25 80, 95 80, 95 105 Z" fill="#ffffff"/>
  </svg>`;
  fs.writeFileSync(path.join(testimonialsDir, `client-avatar-${idx + 1}.svg`), svg);
});

// 6. Hero Dashboard Mockup
const heroDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="24" fill="#ffffff" stroke="#8c9baa" stroke-width="2"/>
  {/* Top Bar */}
  <rect width="800" height="56" rx="24" fill="#f8fafc"/>
  <circle cx="36" cy="28" r="7" fill="#ff5f56"/>
  <circle cx="56" cy="28" r="7" fill="#ffbd2e"/>
  <circle cx="76" cy="28" r="7" fill="#27c93f"/>
  <rect x="120" y="16" width="300" height="24" rx="12" fill="#e2e8f0"/>
  <text x="136" y="32" font-family="sans-serif" font-size="11" fill="#636f7b">capstone.fasilkom.unej.ac.id/dashboard</text>
  {/* Sidebar */}
  <rect x="0" y="56" width="180" height="464" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="20" y="80" width="140" height="32" rx="8" fill="#0080ff"/>
  <rect x="20" y="124" width="140" height="24" rx="6" fill="#f1f5f9"/>
  <rect x="20" y="156" width="140" height="24" rx="6" fill="#f1f5f9"/>
  <rect x="20" y="188" width="140" height="24" rx="6" fill="#f1f5f9"/>
  {/* Main Workspace */}
  <rect x="210" y="80" width="340" height="120" rx="16" fill="#c5e0fb"/>
  <text x="230" y="115" font-family="sans-serif" font-weight="bold" font-size="16" fill="#0050ff">Status Proyek Semester 6</text>
  <text x="230" y="140" font-family="sans-serif" font-size="13" fill="#000000">Sprint 4: Integration & Deployment</text>
  <rect x="230" y="160" width="200" height="12" rx="6" fill="#0080ff"/>
  <rect x="570" y="80" width="200" height="120" rx="16" fill="#f8fafc" stroke="#8c9baa" stroke-width="1"/>
  <text x="590" y="115" font-family="sans-serif" font-weight="bold" font-size="14" fill="#000000">Tim Capstone</text>
  <text x="590" y="140" font-family="sans-serif" font-size="12" fill="#636f7b">1 Dosen Pembimbing</text>
  <text x="590" y="160" font-family="sans-serif" font-size="12" fill="#636f7b">6 Mahasiswa Active</text>
  {/* Data Grid Cards */}
  <rect x="210" y="220" width="560" height="270" rx="16" fill="#ffffff" stroke="#8c9baa" stroke-width="1"/>
  <rect x="230" y="245" width="520" height="40" rx="8" fill="#f8fafc"/>
  <rect x="230" y="295" width="520" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="230" y="345" width="520" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="230" y="395" width="520" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
</svg>`;
fs.writeFileSync(path.join(imagesDir, 'hero-dashboard.svg'), heroDashboardSvg);

console.log('Successfully generated all SVG assets!');

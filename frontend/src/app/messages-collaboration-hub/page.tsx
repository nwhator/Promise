
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promise Ayobami Nwhator Portal - Messages',
  description: 'Messages Collaboration Hub page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/messages-collaboration-hub',
  },
};

export default function MessagesCollaborationHub() {
  const htmlContent = `
    



<!-- Google Fonts: Space Grotesk -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS with Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "var(--primary)",
                        "background-light": "#f5f6f8",
                        "background-dark": "var(--background)",
                        "surface-dark": "#161b26", // Slightly lighter than background-dark for panels
                        "surface-dark-active": "#1e2430", // Even lighter for active states
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit browsers to match dark theme */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101622; 
        }
        ::-webkit-scrollbar-thumb {
            background: #282e39; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3f4756; 
        }
    </style>


<!-- Top Navigation -->
<header class="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#282e39] bg-surface dark:bg-[#111318] px-6 py-3 h-16">
<div class="flex items-center gap-4">
<div class="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined">hexagon</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">Promise Ayobami Nwhator Portal</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden md:flex items-center gap-9">
<a class="text-slate-400 dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-primary text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-[22px] after:left-0 after:w-full after:h-[2px] after:bg-primary" href="#">Communication</a>
<a class="text-slate-400 dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#">Projects</a>
<a class="text-slate-400 dark:text-white text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#">Settings</a>
</div>
<div class="flex items-center gap-4">
<button class="text-slate-400 hover:text-white transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-primary/20" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_itofW-xZzOJJl7ai-Q4ZyEHYtwKblP0oqz8-lV9XA1FMRrL59scwHxWwmAvxkrseH6fonYUff7kcta5jamwsa-RXKlhxmoykVj_pUDaGeVBm8S7zeiMrGrXm4H-O_-t9BV9GrmMrSpJgRKvhn-5GG3qFE7U5fSAOgCXKH7nqWb3iilSswjACa_ajlMxNoM2z7wxKUDS232RGSid_8HzdR8qDVUZWkXlCSQEmaKsD8VfK1cWw1QzjHMIVD0VTOpp8TaxExM3BmE");'></div>
</div>
</div>
</header>
<!-- Main Layout: 3 Panes -->
<div class="flex flex-1 overflow-hidden">
<!-- Left Sidebar: Conversations -->
<aside class="w-80 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-[#282e39] bg-surface dark:bg-[#111318]">
<div class="p-4 border-b border-slate-200 dark:border-[#282e39]">
<div class="flex justify-between items-center mb-4">
<h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Projects</h3>
<button class="text-primary hover:text-primary/80 transition-colors">
<span class="material-symbols-outlined text-xl">add_circle</span>
</button>
</div>
<label class="flex flex-col w-full h-10">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full relative group">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="block w-full rounded-lg border-0 py-1.5 pl-10 pr-3 text-foreground ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#282e39] dark:text-white dark:ring-[#282e39] dark:placeholder:text-[#9ca6ba] sm:text-sm sm:leading-6 bg-transparent" placeholder="Filter conversations..."/>
</div>
</label>
</div>
<div class="flex-1 overflow-y-auto p-3 space-y-1">
<!-- Active Item -->
<div class="group flex items-center gap-3 p-3 rounded-lg bg-primary/10 border-l-4 border-primary cursor-pointer transition-all">
<div class="relative flex-shrink-0">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10" data-alt="Abstract tech pattern blue" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGRD3SVe58ou-H24mIGdb-A1sLB7ezE9wJk5pERH5PJEkNH2tQck8Xzj4Af2Pov-HgSwV90bHbyGA-nOgCqdRRZrozBz-DYErtzWGBEDqq-cXdJNrUgYNs5N8rlqpgZUT7UTzjZeRaLhE16U9Sr_3ej6qxF61lQKg6DgZSMt0PlWrOKKoBrjbQLGefFL1Y-x7ujcNd5Vd-PJb30p7FVT81hCs90ZDuw3zQtzc7mLgOZGsUFLCo_UYhTmtFTJL9KznwOXTPjnmkIHs");'></div>
<div class="absolute -bottom-1 -right-1 size-3 rounded-full bg-emerald-500 border-2 border-[#111318]"></div>
</div>
<div class="flex flex-col min-w-0">
<div class="flex justify-between items-baseline">
<p class="text-foreground dark:text-white text-sm font-bold leading-normal truncate">Project Alpha</p>
<span class="text-[10px] text-primary font-medium">12:40</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-xs truncate">Last message: Deployment successful...</p>
</div>
</div>
<!-- Inactive Item -->
<div class="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] cursor-pointer transition-all border-l-4 border-transparent">
<div class="relative flex-shrink-0">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Abstract code screen" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAn3cqot58xg_1X4UNyJJkTYHkpS126PFLoyu06UR-7YIde3n7bpECHR6dtS8y2lQ6XP91YlcuT24y0BYwVWhhx9A9Xk0ttqUOexL_xc-zgk7gQ7iEeTzXtnkG-6oX25rLMqXtBPhvjWOEfIMSLzMb4FSdH8eg_o_VnrS-F-j5cRmZ4rHLgpqJMz2yrl4RcOx3gfp6w8O622HkeHS6UtCgNpQ9qQaL73d14bqPBNrdDjujkXL11yqp0fl6setjAMTakndYL9wRMqp0");'></div>
<div class="absolute -bottom-1 -right-1 size-3 rounded-full bg-amber-500 border-2 border-[#111318]"></div>
</div>
<div class="flex flex-col min-w-0">
<div class="flex justify-between items-baseline">
<p class="text-foreground dark:text-slate-300 text-sm font-medium leading-normal truncate">API Audit</p>
<span class="text-[10px] text-slate-500">Yesterday</span>
</div>
<p class="text-slate-500 dark:text-slate-500 text-xs truncate font-mono">Pending review on PR #402</p>
</div>
</div>
<!-- Inactive Item -->
<div class="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] cursor-pointer transition-all border-l-4 border-transparent">
<div class="relative flex-shrink-0">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" data-alt="Colorful gradient blocks" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ7qhVWfidC8UygrXPKHwbNpcVDHPrxk34ybzAsBz8QPa5eWS6pLfo_Zh7HW6TWGqbaDTkgq7xYnQ2TD0dG3pZZwvKX72hSz4f-zKa6HRL5TbcTDgJWvU_9A0TQ6aV-EhiZ6c9w6MK4t4EZrBbjuzEePmVJjdoSX5IEfDRTUUC61WBVE0O42wHkdWhj6-BZuCWIyNMnV04SpV3nOlZV08lxGeL_9l9YZej0hudHtraVcpq4dHn9jM_VXKnB0AkMa-fPFjMPb2Na9M");'></div>
</div>
<div class="flex flex-col min-w-0">
<div class="flex justify-between items-baseline">
<p class="text-foreground dark:text-slate-300 text-sm font-medium leading-normal truncate">Q3 Marketing Assets</p>
<span class="text-[10px] text-slate-500">Tue</span>
</div>
<p class="text-slate-500 dark:text-slate-500 text-xs truncate">Final approval needed from design</p>
</div>
</div>
<!-- Separator -->
<div class="h-px bg-slate-200 dark:bg-[#282e39] my-2"></div>
<!-- Direct Messages Header -->
<div class="px-2 pb-2">
<h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Messages</h3>
</div>
<div class="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] cursor-pointer transition-all border-l-4 border-transparent">
<div class="relative flex-shrink-0">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8" data-alt="Portrait of man smiling" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCECu3tiRSLCisAVG2ze55OjHrBlL3D5hq8JTWafu_kpIZ41djGR-K5iLe-zCT7Hap1rajZK3OYA9R7iOKrZr3bcP_pJsTPJ4UpkGtXGJ3Rmf_oduXNjiWIl5OLNR_0l1tRa_Nuh2gDJp-5ramBS0hzjddZXmbL6j-E0GxrAfrKaLZA-dmkMJbDAah00_2mkQn4y6JvVuKA6aH3P2c7-XX7DHi6wUTDgu8MJ-aFQK-piydXVhRz36dxaecp_gd3yNVxC1UB7thioYM");'></div>
<div class="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-slate-400 border-2 border-[#111318]"></div>
</div>
<p class="text-foreground dark:text-slate-300 text-sm font-medium leading-normal truncate">Alex Chen</p>
</div>
</div>
</aside>
<!-- Main Chat Area -->
<main class="flex-1 flex flex-col bg-background dark:bg-background-dark min-w-0">
<!-- Chat Header -->
<div class="h-16 px-6 border-b border-slate-200 dark:border-[#282e39] flex items-center justify-between bg-surface/50 dark:bg-[#111318]/90 backdrop-blur-sm sticky top-0 z-10">
<div class="flex flex-col">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">tag</span>
<h1 class="text-lg font-bold dark:text-white">Project Alpha</h1>
<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-wide">Active</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 pl-7">Deployment pipeline and infrastructure discussions</p>
</div>
<div class="flex items-center gap-2 text-slate-400">
<button class="p-2 hover:bg-surface-brighter dark:hover:bg-[#282e39] rounded-lg transition-colors" title="Pinned Items">
<span class="material-symbols-outlined text-[20px]">push_pin</span>
</button>
<button class="p-2 hover:bg-surface-brighter dark:hover:bg-[#282e39] rounded-lg transition-colors" title="Search in chat">
<span class="material-symbols-outlined text-[20px]">search</span>
</button>
<div class="h-6 w-px bg-slate-200 dark:bg-[#282e39] mx-2"></div>
<button class="p-2 hover:bg-surface-brighter dark:hover:bg-[#282e39] rounded-lg transition-colors text-primary" title="Details">
<span class="material-symbols-outlined text-[20px]">info</span>
</button>
</div>
</div>
<!-- Chat Stream -->
<div class="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col">
<!-- Date Divider -->
<div class="relative flex items-center justify-center my-4">
<div class="absolute inset-0 flex items-center">
<div class="w-full border-t border-slate-200 dark:border-[#282e39]"></div>
</div>
<span class="relative bg-background dark:bg-background-dark px-4 text-xs font-mono text-slate-500 uppercase">Today</span>
</div>
<!-- System Message -->
<div class="flex justify-center">
<div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-brighter dark:bg-[#1e2430] border border-slate-200 dark:border-[#282e39]">
<span class="material-symbols-outlined text-[16px] text-primary">rocket_launch</span>
<span class="text-xs font-mono text-slate-400 dark:text-slate-400">Deployment Pipeline triggered by <strong class="text-foreground dark:text-slate-200">@Alex</strong></span>
<span class="text-[10px] text-slate-400">10:23 AM</span>
</div>
</div>
<!-- Peer Message -->
<div class="flex gap-4 max-w-3xl">
<div class="flex-shrink-0 mt-1">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10" data-alt="Alex portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNxymMMfOa1Z25sH7BqwSdj0wC8Zhjf6hobcb6IwEv9NBb6RFkRke4LyAoIx3j2GbvA0AoFZQva0Hq1PjVjJG_ONlaF0Cm23H_5h7aKMJ16emvBDbi759pxUpJR5AlLukqGyG458I8SkS_-kWjOzvm8q1WWpmKCXgOzb7hLBQlOwVHtLVCvVoDJO0YRFk0JP-g5xenP9cldBDvyVWv2X7sJftb-ZE9q6IwH4WZBGH26TUEiobOUouI64ozmsufVZuNRKm6GGIqdhY");'></div>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-baseline gap-2">
<span class="text-sm font-bold dark:text-white">Alex Chen</span>
<span class="text-[10px] text-slate-500">10:24 AM</span>
</div>
<div class="bg-surface dark:bg-[#1e2430] p-4 rounded-r-lg rounded-bl-lg border border-slate-200 dark:border-transparent text-slate-700 dark:text-slate-200 text-sm leading-relaxed shadow-sm">
<p class="mb-2">Hey team, just triggered the staging deployment. I've updated the schema for the client API to handle the new \`promsie_id\` field.</p>
<p>Can someone review the JSON structure below?</p>
</div>
<!-- Code Snippet -->
<div class="mt-2 bg-[#0d1117] rounded-lg border border-[#30363d] overflow-hidden font-mono text-xs max-w-lg shadow-md">
<div class="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-[#30363d]">
<span class="text-slate-400">schema_v2.json</span>
<span class="text-[10px] text-slate-500">JSON</span>
</div>
<div class="p-3 text-slate-300 overflow-x-auto">
<pre><code>{
  <span class="text-pink-400">"id"</span>: <span class="text-blue-400">"promise_12345"</span>,
  <span class="text-pink-400">"status"</span>: <span class="text-blue-400">"pending"</span>,
  <span class="text-pink-400">"metadata"</span>: {
    <span class="text-pink-400">"created_at"</span>: <span class="text-blue-400">"2023-10-27T10:00:00Z"</span>
  }
}</code></pre>
</div>
</div>
</div>
</div>
<!-- User Message -->
<div class="flex flex-row-reverse gap-4 max-w-3xl ml-auto">
<div class="flex-shrink-0 mt-1">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10" data-alt="My avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKCin0fLDAUCx7S_WD1mCJAKxhpr1GxqKUWuf1ittMH4Wo_rmYCfe0g4S_fDPZOirSwvdlehNS2wnBC-dvn7fi36W5BVQlcaBp_tGHy8b4oOpFT5VoMijD_QUWGpDOeI-8EC0PgfqytP21LBSj366-WUVhhXCYOfh07ygPB1joO7qJEg1RkWAQZJLoOHUjC3K4D0ZBIRlUdyHkyDyyZRFsuoMGICn_OuUarPbpVQRX6Wc0DII7MdcsNQrfUA4zEwpF2xg_bCmH-tw");'></div>
</div>
<div class="flex flex-col gap-1 items-end">
<div class="flex items-baseline gap-2 flex-row-reverse">
<span class="text-sm font-bold dark:text-white">Sarah Jenkins</span>
<span class="text-[10px] text-slate-500">10:35 AM</span>
</div>
<div class="bg-primary text-white p-4 rounded-l-lg rounded-br-lg text-sm leading-relaxed shadow-md">
<p>Looks good to me, Alex. The nested metadata object is exactly what we needed for the frontend render.</p>
</div>
<!-- File Attachment -->
<div class="mt-1 flex items-center gap-3 p-3 bg-surface dark:bg-[#1e2430] border border-slate-200 dark:border-[#282e39] rounded-lg w-64 hover:border-primary transition-colors cursor-pointer group">
<div class="bg-red-500/10 p-2 rounded text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[24px]">picture_as_pdf</span>
</div>
<div class="flex flex-col overflow-hidden">
<span class="text-sm font-medium dark:text-white truncate">API_Docs_Final.pdf</span>
<span class="text-[10px] text-slate-500">2.4 MB</span>
</div>
<span class="material-symbols-outlined ml-auto text-slate-400 group-hover:text-primary">download</span>
</div>
</div>
</div>
<!-- Peer Message -->
<div class="flex gap-4 max-w-3xl">
<div class="flex-shrink-0 mt-1">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-10" data-alt="Alex portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3hyHcFFwxM-gd7J42CV1TJvvzO4nnHZSoMyahbgBQP6mXDb6mjVItQabc_NqbGq3g9oFSMVyjXdwqnt3rP_ejzK9VIPCVDjDj16xea5WV_6Ghex-2ELG1EQWQ5G4gu4gPVdzN9Ci0PM2OzW6tN8Kq1tmC4IXYcPzfvKC9j_LGAxq2QqXue2HxEBETl0GMbxfFdDEEuLg2KKPVnvNmH6vyVESSdmEsuO8bVYXW3qR2LwcqhRVa-1D_gEX-Und3cUGMzyzcYPl2Dnw");'></div>
</div>
<div class="flex flex-col gap-1">
<div class="flex items-baseline gap-2">
<span class="text-sm font-bold dark:text-white">Alex Chen</span>
<span class="text-[10px] text-slate-500">10:42 AM</span>
</div>
<div class="bg-surface dark:bg-[#1e2430] p-4 rounded-r-lg rounded-bl-lg border border-slate-200 dark:border-transparent text-slate-700 dark:text-slate-200 text-sm leading-relaxed shadow-sm">
<p>Great. I'll merge the PR and notify the QA team.</p>
</div>
</div>
</div>
<!-- System Message: Milestone -->
<div class="flex justify-center mt-4">
<div class="flex flex-col items-center gap-1 p-4 rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#1e2430] dark:to-[#161b26] border border-slate-200 dark:border-[#282e39] w-full max-w-md shadow-sm">
<div class="p-2 bg-green-500/10 rounded-full mb-1">
<span class="material-symbols-outlined text-[24px] text-green-500">check_circle</span>
</div>
<span class="text-sm font-bold dark:text-white">Milestone 2 Completed</span>
<span class="text-xs text-slate-500 text-center">The backend architecture phase has been marked as complete by the system administrator.</span>
</div>
</div>
</div>
<!-- Input Area -->
<div class="p-6 pt-2 bg-background dark:bg-background-dark sticky bottom-0 z-10">
<div class="bg-surface dark:bg-[#1e2430] border border-slate-200 dark:border-[#282e39] rounded-xl shadow-lg flex flex-col focus-within:ring-2 focus-within:ring-primary/50 transition-all">
<!-- Formatting Toolbar -->
<div class="flex items-center gap-1 p-2 border-b border-slate-100 dark:border-[#282e39]/50">
<button class="p-1.5 rounded text-slate-400 hover:text-slate-400 dark:hover:text-slate-200 hover:bg-surface-brighter dark:hover:bg-[#282e39] transition-colors"><span class="material-symbols-outlined text-[18px]">format_bold</span></button>
<button class="p-1.5 rounded text-slate-400 hover:text-slate-400 dark:hover:text-slate-200 hover:bg-surface-brighter dark:hover:bg-[#282e39] transition-colors"><span class="material-symbols-outlined text-[18px]">format_italic</span></button>
<button class="p-1.5 rounded text-slate-400 hover:text-slate-400 dark:hover:text-slate-200 hover:bg-surface-brighter dark:hover:bg-[#282e39] transition-colors"><span class="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
<div class="w-px h-4 bg-slate-200 dark:bg-[#282e39] mx-1"></div>
<button class="p-1.5 rounded text-slate-400 hover:text-slate-400 dark:hover:text-slate-200 hover:bg-surface-brighter dark:hover:bg-[#282e39] transition-colors"><span class="material-symbols-outlined text-[18px]">code</span></button>
<button class="p-1.5 rounded text-slate-400 hover:text-slate-400 dark:hover:text-slate-200 hover:bg-surface-brighter dark:hover:bg-[#282e39] transition-colors"><span class="material-symbols-outlined text-[18px]">add_link</span></button>
</div>
<div class="flex items-end gap-2 p-3">
<button class="p-2 rounded-full text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors self-end mb-1">
<span class="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<textarea class="flex-1 bg-transparent border-none resize-none focus:ring-0 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 min-h-[50px] max-h-[200px] py-2" placeholder="Message #project-alpha..."></textarea>
<button class="bg-primary hover:bg-blue-600 text-white rounded-lg p-2.5 flex items-center justify-center transition-colors shadow-lg shadow-primary/30 mb-1">
<span class="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
</div>
</main>
<!-- Right Sidebar: Context -->
<aside class="w-72 flex-shrink-0 flex flex-col border-l border-slate-200 dark:border-[#282e39] bg-surface dark:bg-[#161b26] hidden lg:flex">
<!-- Participants -->
<div class="flex flex-col p-4 border-b border-slate-200 dark:border-[#282e39] gap-4">
<div class="flex items-center justify-between">
<h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Participants (4)</h3>
<span class="text-xs text-primary font-medium hover:underline cursor-pointer">View all</span>
</div>
<div class="space-y-3">
<div class="flex items-center gap-3">
<div class="relative">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-9" data-alt="User Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcrHL50uDkrTs_K6AQEkgKP13TmksXKx6JnrZZ9Ea3cCat7NtHUrE9jZLWuVXOJ8q_8iUxGsSPhD5tlZW_AHBQ4-Tgy7ky4Mu-6-FQcstW8OwibU8FeYjpAgo6dB7VXtLzzumdxDGEa2ywnHnnBJeSGwoPzzb9loX0RlXITSTNKCtHu3XTMLk43EuVx1ukDFZ3OUqlIoDv__T0t0I-ECIC6MAd43VKxgTm8JMC3PXe6FREJOegn_KgpOCWPSh1KOwnHBKE7ICH88I");'></div>
<div class="absolute -bottom-1 -right-1 size-2.5 rounded-full bg-emerald-500 ring-2 ring-[#161b26]"></div>
</div>
<div class="flex flex-col">
<span class="text-sm font-medium dark:text-slate-200">Sarah Jenkins</span>
<span class="text-[10px] text-emerald-500 font-medium">Online</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="relative">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-9" data-alt="User Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNODU0_0H3c9bBHDp7S36XX0GphnOfjYrZtGdO8kMIHLbOWEHlr5hgz7VqPCrnZ2hRKkmrlOR3V6xtJFiBIHJbgxdZyGXgXNFNe2swXRmGMz6l-kqyHvKG6VgR7EXPnkPIY_5GQLi8aQUnNkLWE8Ix_vIO4btAjZqDMC47WoT_1JbgEE7CMFqIl8EAGevnSB9ZUbJPL6gKnrkgGSGrAmdft8nNwJwUv3BjdJLKFzHUi3o89A5_iunwJ8LCYj-djwev2obqTsh3Qwc");'></div>
<div class="absolute -bottom-1 -right-1 size-2.5 rounded-full bg-emerald-500 ring-2 ring-[#161b26]"></div>
</div>
<div class="flex flex-col">
<span class="text-sm font-medium dark:text-slate-200">Alex Chen</span>
<span class="text-[10px] text-emerald-500 font-medium">Online</span>
</div>
</div>
<div class="flex items-center gap-3 opacity-70">
<div class="relative">
<div class="bg-center bg-no-repeat bg-cover rounded-lg size-9" data-alt="User Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuoPs9u0EEUxHsLinuAjk-yJtIB7F3tB7fllfXLcW732Y7MuNesVXHF4hiwdh4jj5pabWh55RTDC9yMgBxHrwq5HRIr9JRsyfOV1smzriXGytBZiLfpJ8okfDM-_niR2uMaeTL-iPHZdn_8qqMZIK6DVR1r5tvPQj9Ju1caF1xIK_3WWpZcxvOwA_v0wuIc0fuBU4YB_BPJSsQRs7l11cbRMq-7mgLa7LkuO65-kQkvDuJhpmtcmuRoLsRqMssc-N2C37-qaiK3qA");'></div>
<div class="absolute -bottom-1 -right-1 size-2.5 rounded-full bg-amber-500 ring-2 ring-[#161b26]"></div>
</div>
<div class="flex flex-col">
<span class="text-sm font-medium dark:text-slate-200">Mike Ross</span>
<span class="text-[10px] text-amber-500 font-medium">Away</span>
</div>
</div>
</div>
</div>
<!-- Quick Files -->
<div class="flex flex-col p-4 gap-4 flex-1">
<div class="flex items-center justify-between">
<h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Quick Files</h3>
<span class="text-xs text-primary font-medium hover:underline cursor-pointer">All files</span>
</div>
<div class="flex flex-col gap-2 overflow-y-auto max-h-[300px] pr-1">
<a class="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] group transition-colors" href="#">
<div class="size-8 rounded flex items-center justify-center bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</div>
<div class="flex flex-col flex-1 min-w-0">
<span class="text-xs font-medium dark:text-slate-300 truncate">contract_final.pdf</span>
<span class="text-[10px] text-slate-500">Yesterday • 1.2 MB</span>
</div>
</a>
<a class="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] group transition-colors" href="#">
<div class="size-8 rounded flex items-center justify-center bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">image</span>
</div>
<div class="flex flex-col flex-1 min-w-0">
<span class="text-xs font-medium dark:text-slate-300 truncate">logo_white.png</span>
<span class="text-[10px] text-slate-500">Oct 24 • 450 KB</span>
</div>
</a>
<a class="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-brighter dark:hover:bg-[#1e2430] group transition-colors" href="#">
<div class="size-8 rounded flex items-center justify-center bg-surface0/10 text-slate-500 group-hover:bg-surface0 group-hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">data_object</span>
</div>
<div class="flex flex-col flex-1 min-w-0">
<span class="text-xs font-medium dark:text-slate-300 truncate">schema_v1.json</span>
<span class="text-[10px] text-slate-500">Oct 20 • 12 KB</span>
</div>
</a>
</div>
</div>
<!-- Footer for right pane (Support link maybe?) -->
<div class="p-4 mt-auto border-t border-slate-200 dark:border-[#282e39]">
<div class="p-3 rounded-lg bg-primary/5 border border-primary/20">
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-primary text-[18px] mt-0.5">help</span>
<div class="flex flex-col">
<p class="text-xs font-medium dark:text-white">Need help?</p>
<a class="text-[10px] text-primary hover:underline" href="#">Contact Support</a>
</div>
</div>
</div>
</div>
</aside>
</div>




<!-- PROMISE_SHARED_FOOTER_START -->
<footer class="border-t border-border-dark glass-nav sticky top-0 z-50 mt-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-sm text-text-muted">© <span id="copyright-year"></span> Promise Ayobami Nwhator. All rights reserved.</p>
    <div class="flex items-center gap-4 text-sm">
      <a href="https://github.com/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">LinkedIn</a>
    </div>
  </div>
</footer>
<script>
(function () {
  const yearNode = document.getElementById('copyright-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const routeMap = {
    home: '/',
    about: '/about',
    work: '/projects',
    project: '/projects',
    projects: '/projects',
    services: '/services',
    technologies: '/technologies',
    resume: '/resume',
    contact: '/contact',
    blog: '/blog'
  };

  document.querySelectorAll('a').forEach(function (anchor) {
    const rawHref = (anchor.getAttribute('href') || '').trim();
    const label = (anchor.textContent || '').trim().toLowerCase();

    if (rawHref === 'https://github.com' || rawHref === 'https://github.com/') {
      anchor.setAttribute('href', 'https://github.com/nwhator');
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
      return;
    }

    if (rawHref === 'https://linkedin.com' || rawHref === 'https://linkedin.com/') {
      anchor.setAttribute('href', 'https://linkedin.com/in/nwhator');
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
      return;
    }

    if (rawHref !== '#') return;

    for (const key in routeMap) {
      if (label.includes(key)) {
        anchor.setAttribute('href', routeMap[key]);
        anchor.setAttribute('target', '_top');
        break;
      }
    }
  });
})();
</script>
<!-- PROMISE_SHARED_FOOTER_END -->

  `;
  return (
    <div className="stitch-page-root overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </div>
  );
}

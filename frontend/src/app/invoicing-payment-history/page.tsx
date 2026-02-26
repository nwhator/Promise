
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoicing &amp; Payment History - Promise Ayobami Promise Ayobami Promise Ayobami Nwhator',
  description: 'Invoicing Payment History page for PROMISE NWHATOR.',
  alternates: {
    canonical: '/invoicing-payment-history',
  },
};

export default function InvoicingPaymentHistory() {
  const htmlContent = `
    



<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0d59f2",
                        "primary-content": "#ffffff",
                        "background-light": "#f5f6f8",
                        "background-dark": "#101622",
                        "surface-dark": "#161b22",
                        "surface-highlight": "#1e242e",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for table if needed */
        .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #161b22; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #282e39; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #3a4250; 
        }
    </style>


<!-- Header / Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark px-6 py-4 lg:px-10 sticky top-0 z-50">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">verified_user</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">Promise Ayobami Nwhator</h2>
</div>
<div class="hidden lg:flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-9">
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Dashboard</a>
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Projects</a>
<a class="text-primary text-sm font-bold leading-normal relative after:content-[''] after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-primary" href="#">Invoices</a>
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Settings</a>
</nav>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="flex items-center gap-4">
<button class="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
<span class="material-symbols-outlined text-xl">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700" data-alt="User profile picture of a man in a suit" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtXBPv8mVTj8kGcGOuMofjpdcKNymQsXE0yn26NLCfbw9RtvVg6EHNF8vnYx5ZtyMNcljAK4_Q5JwiJOo7HaMYBa8g5qxa8PINep8PGOFoBT90N7OHcDDYexit-gBDqDm2JK_IiLZ_fPPtGRATGa-gSDplGoQE4zNkz8nz-5kT8giWil6WEwC7iKuCgd-K7GLCEBgic-ZVVVpxRxbjJZXkCV4t7J2yyacad8RzqPjcGX8ucrIISsI5hLfF5O_phjowuoZAyzdAR2A");'></div>
</div>
</div>
<!-- Mobile Menu Toggle -->
<button class="lg:hidden text-slate-900 dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<main class="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col gap-8">
<!-- Header Section -->
<div class="flex flex-col gap-2">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Invoicing &amp; Payments</h1>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal mt-2">Manage your billing details, payment methods, and download past invoices.</p>
</div>
<button class="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-500/20">
<span class="material-symbols-outlined text-xl">add_card</span>
<span>Make a Payment</span>
</button>
</div>
</div>
<!-- Stats Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
<!-- Card 1 -->
<div class="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-primary">account_balance_wallet</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Total Outstanding</p>
<p class="text-slate-900 dark:text-white tracking-tight text-3xl font-bold mt-1">\$4,250.00</p>
<div class="mt-2 flex items-center gap-1 text-emerald-500 text-xs font-bold">
<span class="material-symbols-outlined text-sm">trending_down</span>
<span>12% from last month</span>
</div>
</div>
<!-- Card 2 -->
<div class="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-emerald-500">payments</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Paid to Date</p>
<p class="text-slate-900 dark:text-white tracking-tight text-3xl font-bold mt-1">\$12,500.00</p>
<div class="mt-2 flex items-center gap-1 text-slate-400 text-xs font-medium">
<span>Fiscal Year 2023</span>
</div>
</div>
<!-- Card 3 -->
<div class="flex flex-col gap-1 rounded-xl p-6 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-amber-500">calendar_clock</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Upcoming Due Date</p>
<p class="text-slate-900 dark:text-white tracking-tight text-3xl font-bold mt-1">Oct 24, 2023</p>
<div class="mt-2 flex items-center gap-1 text-amber-500 text-xs font-bold">
<span class="material-symbols-outlined text-sm">warning</span>
<span>Due in 3 days</span>
</div>
</div>
</div>
<!-- Main Content Split -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
<!-- Invoice History Table (Left) -->
<div class="lg:col-span-8 flex flex-col gap-4">
<!-- Filters -->
<div class="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-surface-dark p-4 rounded-lg border border-slate-200 dark:border-slate-800">
<div class="relative w-full sm:w-64">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span class="material-symbols-outlined text-lg">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md leading-5 bg-slate-50 dark:bg-surface-highlight text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out" placeholder="Search invoice ID..." type="text"/>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-surface-highlight border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
<span class="material-symbols-outlined text-lg">filter_list</span>
                            Filter
                        </button>
<button class="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-surface-highlight border border-slate-200 dark:border-slate-700 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:border-primary transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                            Export
                        </button>
</div>
</div>
<!-- Table Container -->
<div class="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div class="overflow-x-auto custom-scrollbar">
<table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
<thead class="bg-slate-50 dark:bg-surface-highlight">
<tr>
<th class="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Invoice ID</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Date</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Service</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Amount</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Status</th>
<th class="relative px-6 py-4" scope="col">
<span class="sr-only">Actions</span>
</th>
</tr>
</thead>
<tbody class="bg-white dark:bg-surface-dark divide-y divide-slate-200 dark:divide-slate-800">
<!-- Row 1 -->
<tr class="hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                                        #INV-3024
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                                        Oct 01, 2023
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-medium">
                                        API Architecture Audit
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-bold">
                                        \$2,000.00
                                    </td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                                            Pending
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-slate-400 hover:text-primary transition-colors" href="#" title="Download PDF">
<span class="material-symbols-outlined">download</span>
</a>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                                        #INV-3021
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                                        Sep 15, 2023
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-medium">
                                        Q3 Retainer Service
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-bold">
                                        \$5,000.00
                                    </td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                            Paid
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-slate-400 hover:text-primary transition-colors" href="#" title="Download PDF">
<span class="material-symbols-outlined">download</span>
</a>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                                        #INV-2998
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                                        Aug 30, 2023
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-medium">
                                        Legacy System Migration
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-bold">
                                        \$3,250.00
                                    </td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                            Paid
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-slate-400 hover:text-primary transition-colors" href="#" title="Download PDF">
<span class="material-symbols-outlined">download</span>
</a>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                                        #INV-2945
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                                        Aug 01, 2023
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-medium">
                                        Security Consultation
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-bold">
                                        \$1,500.00
                                    </td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                            Paid
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-slate-400 hover:text-primary transition-colors" href="#" title="Download PDF">
<span class="material-symbols-outlined">download</span>
</a>
</td>
</tr>
<!-- Row 5 -->
<tr class="hover:bg-slate-50 dark:hover:bg-surface-highlight transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-400 dark:text-slate-500">
                                        #INV-2810
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                                        Jun 15, 2023
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-medium">
                                        Initial Project Setup
                                    </td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white font-bold">
                                        \$750.00
                                    </td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                            Archived
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<a class="text-slate-400 hover:text-primary transition-colors" href="#" title="Download PDF">
<span class="material-symbols-outlined">download</span>
</a>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="bg-slate-50 dark:bg-surface-highlight px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 sm:px-6">
<div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p class="text-sm text-slate-500 dark:text-slate-400">
                                    Showing <span class="font-medium">1</span> to <span class="font-medium">5</span> of <span class="font-medium">12</span> results
                                </p>
</div>
<div>
<nav aria-label="Pagination" class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-surface-highlight" href="#">
<span class="sr-only">Previous</span>
<span class="material-symbols-outlined text-lg">chevron_left</span>
</a>
<a aria-current="page" class="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-bold" href="#">
                                        1
                                    </a>
<a class="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-surface-highlight relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">
                                        2
                                    </a>
<a class="bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-surface-highlight relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">
                                        3
                                    </a>
<a class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-surface-highlight" href="#">
<span class="sr-only">Next</span>
<span class="material-symbols-outlined text-lg">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
</div>
<!-- Payment Methods Sidebar (Right) -->
<div class="lg:col-span-4 flex flex-col gap-6">
<!-- Payment Methods Card -->
<div class="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
<div class="flex items-center justify-between">
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Payment Methods</h2>
<button class="text-sm font-bold text-primary hover:text-blue-400">Manage</button>
</div>
<!-- Card Item 1 (Default) -->
<div class="group relative rounded-lg border border-primary bg-primary/5 p-4 transition-all">
<div class="flex items-start justify-between">
<div class="flex items-center gap-3">
<div class="bg-white dark:bg-white rounded p-1 h-8 w-12 flex items-center justify-center shadow-sm">
<img alt="Visa Logo" class="h-full object-contain" data-alt="Visa credit card logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp8r6j8Uvp7j-TndNhvLF0gwJcwGE9qc_12__Geq-h2gqaiChf7hjzfRX5rXiKRUwo1n4bzNvs1ow1DjAA6Swu55DM2_1sljH1xgUPhTFjfPPfrGCURzcIP16LJ4k97eB3CCAmD1XmgTqulCe70H_FZVEJodmIkyutJWeAj3eJO9fyN1D5mecAoX6g1VYPvwKtgNWVTkOatdegfCkMzuKh8mGulhEWQ4tRyOKUrNAxzUocfofy7-sR8S9FdN6TkAswGZZVevJO5mA"/>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Visa ending in 4242</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Expires 12/25</p>
</div>
</div>
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary text-white">
                                Default
                            </span>
</div>
<div class="mt-3 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-xs font-medium text-slate-500 hover:text-primary">Edit</button>
<button class="text-xs font-medium text-slate-500 hover:text-red-500">Remove</button>
</div>
</div>
<!-- Card Item 2 -->
<div class="group relative rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:bg-slate-50 dark:hover:bg-surface-highlight transition-all">
<div class="flex items-start justify-between">
<div class="flex items-center gap-3">
<div class="bg-white dark:bg-white rounded p-1 h-8 w-12 flex items-center justify-center shadow-sm">
<img alt="Mastercard Logo" class="h-full object-contain" data-alt="Mastercard credit card logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnhri_eXSNkzfNIjWfklIqNNaKVcBPWVOOx4fJK3fRjPj3vNks0e4LEqBLZi43vSaLcfIBrH7oRL3w8wfyHt40XOkwnVVUF2T4RamPxyYsVbMnoyvJNQ6rU45DXYi2aMfpPr7UKRL9460z7t2NO_gzZWF9OmvGLLGVOZmd29V7evFtO6qA_3xeVgSuMOtQU4jifWw3fIoRgPlifVbB_FmHi1TkT7e5zqbOBe9wVb26mPBltKr8UCfsD0u7pCdG-9jfr_oZ3HlagRI"/>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Mastercard ending in 8831</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Expires 09/24</p>
</div>
</div>
</div>
<div class="mt-3 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="text-xs font-medium text-slate-500 hover:text-primary">Set Default</button>
<button class="text-xs font-medium text-slate-500 hover:text-red-500">Remove</button>
</div>
</div>
<button class="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 dark:border-slate-600 p-3 text-sm font-medium text-slate-500 hover:border-primary hover:text-primary transition-all dark:text-slate-400">
<span class="material-symbols-outlined text-lg">add</span>
                        Add New Method
                    </button>
</div>
<!-- Billing Contact Info -->
<div class="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4">
<div class="flex items-center justify-between">
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Billing Details</h2>
<button class="text-primary hover:text-blue-400">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
</div>
<div class="flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-slate-100 dark:bg-surface-highlight flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined text-sm">business</span>
</div>
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Company Name</span>
<span class="text-sm font-medium text-slate-900 dark:text-white">Acme Corp Ltd.</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-slate-100 dark:bg-surface-highlight flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined text-sm">mail</span>
</div>
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Billing Email</span>
<span class="text-sm font-medium text-slate-900 dark:text-white">billing@acmecorp.com</span>
</div>
</div>
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-slate-100 dark:bg-surface-highlight flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined text-sm">location_on</span>
</div>
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 uppercase">Address</span>
<span class="text-sm font-medium text-slate-900 dark:text-white">123 Business Park, Suite 400<br/>San Francisco, CA 94107</span>
</div>
</div>
</div>
</div>
<!-- Help Box -->
<div class="bg-gradient-to-br from-primary/20 to-surface-dark rounded-xl p-6 flex flex-col gap-2 border border-primary/20">
<div class="flex items-center gap-2 text-primary mb-1">
<span class="material-symbols-outlined">headset_mic</span>
<span class="font-bold text-sm">Need Help?</span>
</div>
<p class="text-sm text-slate-300">Have questions about your invoice or need to update your tax information?</p>
<a class="text-sm font-medium text-white hover:underline mt-2" href="#">Contact Support →</a>
</div>
</div>
</div>
</main>




<!-- PROMISE_SHARED_FOOTER_START -->
<footer class="border-t border-border-dark bg-background-dark/95 mt-8">
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
    <div className="stitch-page-root">
      {parse(htmlContent)}
    </div>
  );
}

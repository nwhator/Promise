"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/blogApi";

// ─── Types ────────────────────────────────────────────────────────────────────

type ContactMessage = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
    is_read: boolean;
};

type Stats = {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
    totalMessages: number;
    unreadMessages: number;
};

type Tab = "overview" | "blog" | "messages" | "new-post";

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
    const [tab, setTab] = useState<Tab>("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Auth
    const [authed, setAuthed] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authError, setAuthError] = useState("");

    // Data
    const [stats, setStats] = useState<Stats>({
        totalPosts: 0,
        publishedPosts: 0,
        draftPosts: 0,
        totalMessages: 0,
        unreadMessages: 0,
    });
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [dataLoading, setDataLoading] = useState(false);

    // Post editor
    const [editPost, setEditPost] = useState<Partial<BlogPost> | null>(null);
    const [saving, setSaving] = useState(false);
    const [saveMsg, setSaveMsg] = useState("");

    // ── Auth handlers ────────────────────────────────────────────────────────

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setAuthed(!!session);
            setAuthLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setAuthed(!!session);
            }
        );
        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setAuthError("");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setAuthError(error.message);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    // ── Data loading ─────────────────────────────────────────────────────────

    const loadData = useCallback(async () => {
        setDataLoading(true);
        try {
            const [{ data: postsData }, { data: msgsData }] = await Promise.all([
                supabase.from("blog_posts").select("*").order("created_at", { ascending: false }),
                supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
            ]);

            const allPosts = (postsData ?? []) as BlogPost[];
            const allMsgs = (msgsData ?? []) as ContactMessage[];

            setPosts(allPosts);
            setMessages(allMsgs);
            setStats({
                totalPosts: allPosts.length,
                publishedPosts: allPosts.filter((p) => p.is_published).length,
                draftPosts: allPosts.filter((p) => !p.is_published).length,
                totalMessages: allMsgs.length,
                unreadMessages: allMsgs.filter((m) => !m.is_read).length,
            });
        } finally {
            setDataLoading(false);
        }
    }, []);

    useEffect(() => {
        if (authed) loadData();
    }, [authed, loadData]);

    // ── Post CRUD ────────────────────────────────────────────────────────────

    const savePost = async () => {
        if (!editPost?.title || !editPost?.content) {
            setSaveMsg("Title and content are required.");
            return;
        }
        setSaving(true);
        setSaveMsg("");

        const slug =
            editPost.slug ||
            editPost.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

        const payload = {
            ...editPost,
            slug,
            updated_at: new Date().toISOString(),
            published_at: editPost.is_published
                ? editPost.published_at ?? new Date().toISOString()
                : null,
        };

        const { error } = editPost.id
            ? await supabase.from("blog_posts").update(payload).eq("id", editPost.id)
            : await supabase.from("blog_posts").insert(payload);

        if (error) {
            console.error("Supabase Error:", error);
            if (error.code === "42501") {
                setSaveMsg("Security Error (RLS): Your Supabase account doesn't have permission to save to 'blog_posts'. Please run the SQL schema to fix policies.");
            } else {
                setSaveMsg("Error: " + error.message);
            }
        } else {
            setSaveMsg("Saved successfully!");
            setTab("blog");
            setEditPost(null);
            await loadData();
        }
        setSaving(false);
    };

    const deletePost = async (id: string) => {
        if (!confirm("Delete this post? This cannot be undone.")) return;
        await supabase.from("blog_posts").delete().eq("id", id);
        await loadData();
    };

    const markMessageRead = async (id: string) => {
        await supabase.from("contact_messages").update({ is_read: true }).eq("id", id);
        await loadData();
    };

    const deleteMessage = async (id: string) => {
        if (!confirm("Delete this message?")) return;
        await supabase.from("contact_messages").delete().eq("id", id);
        await loadData();
    };

    // ── Login screen ─────────────────────────────────────────────────────────

    if (authLoading) {
        return (
            <div className="min-h-screen bg-[#101922] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!authed) {
        return (
            <div className="min-h-screen bg-[#101922] flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-600/30 mb-4">
                            <span className="text-3xl">🔐</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                        <p className="text-slate-400 text-sm mt-1">
                            PROMISE NWHATOR · System Management
                        </p>
                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="bg-[#1a242d] border border-slate-700 rounded-xl p-8 space-y-5 shadow-2xl"
                    >
                        {authError && (
                            <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-3 text-red-300 text-sm">
                                {authError}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/25"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ── Main dashboard ───────────────────────────────────────────────────────

    const navItems: { id: Tab; label: string; icon: string }[] = [
        { id: "overview", label: "Overview", icon: "📊" },
        { id: "blog", label: "Blog Posts", icon: "✍️" },
        { id: "messages", label: "Messages", icon: "💬" },
        { id: "new-post", label: "New Post", icon: "➕" },
    ];

    return (
        <div className="flex h-screen w-full bg-[#101922] text-slate-100 overflow-hidden font-sans">
            {/* ── Sidebar ─────────────────────────────────────────────────────── */}
            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/60 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed md:relative z-30 md:z-auto flex flex-col w-64 h-full bg-[#151e26] border-r border-slate-800 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                {/* Logo */}
                <div className="p-4 border-b border-slate-800">
                    <div className="flex items-center gap-3 px-2 py-2">
                        <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <div>
                            <h1 className="text-white text-sm font-bold leading-none">
                                Promise Nwhator
                            </h1>
                            <p className="text-slate-400 text-xs mt-0.5">System Management</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 space-y-1">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Main Menu
                    </p>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setTab(item.id);
                                setSidebarOpen(false);
                                if (item.id === "new-post") setEditPost({});
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${tab === item.id
                                ? "bg-blue-600/20 text-blue-300"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }`}
                        >
                            <span className="text-base">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.id === "messages" && stats.unreadMessages > 0 && (
                                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {stats.unreadMessages}
                                </span>
                            )}
                        </button>
                    ))}

                    <div className="pt-4 border-t border-slate-800 mt-4">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm"
                        >
                            <span>🏠</span> View Portfolio
                        </Link>
                        <Link
                            href="/blog"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm"
                        >
                            <span>📰</span> View Blog
                        </Link>
                    </div>
                </nav>

                {/* User */}
                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                            PN
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Admin</p>
                            <p className="text-xs text-slate-400 truncate">Promise Nwhator</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="text-slate-500 hover:text-red-400 transition-colors text-sm"
                            title="Sign out"
                        >
                            🚪
                        </button>
                    </div>
                </div>
            </aside>

            {/* ── Main ────────────────────────────────────────────────────────── */}
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-[#101922]/95 backdrop-blur shrink-0">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden p-2 text-slate-400 hover:text-white"
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Open menu"
                        >
                            ☰
                        </button>
                        <div className="flex items-center text-sm text-slate-400">
                            <span className="hover:text-blue-400 cursor-pointer">
                                Dashboard
                            </span>
                            <span className="mx-2">›</span>
                            <span className="text-white capitalize">{tab.replace("-", " ")}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {dataLoading && (
                            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        )}
                        <button
                            onClick={loadData}
                            className="text-slate-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-slate-800"
                        >
                            ↻ Refresh
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    {/* ── Overview ──────────────────────────────────────────────── */}
                    {tab === "overview" && (
                        <div className="space-y-8 max-w-7xl mx-auto">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">
                                    Overview
                                </h2>
                                <p className="text-slate-400 text-sm">
                                    Your portfolio system at a glance.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    {
                                        label: "Total Posts",
                                        value: stats.totalPosts,
                                        icon: "📝",
                                        color: "blue",
                                    },
                                    {
                                        label: "Published",
                                        value: stats.publishedPosts,
                                        icon: "✅",
                                        color: "green",
                                    },
                                    {
                                        label: "Drafts",
                                        value: stats.draftPosts,
                                        icon: "📋",
                                        color: "yellow",
                                    },
                                    {
                                        label: "Unread Messages",
                                        value: stats.unreadMessages,
                                        icon: "📨",
                                        color: "red",
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-[#1a242d] rounded-xl p-5 border border-slate-700 shadow-sm"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-slate-400 text-sm font-medium">
                                                    {stat.label}
                                                </p>
                                                <h3 className="text-3xl font-bold text-white mt-1">
                                                    {stat.value}
                                                </h3>
                                            </div>
                                            <div className="text-2xl">{stat.icon}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Action center */}
                            <div className="bg-gradient-to-r from-blue-600/90 to-blue-800 rounded-xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tight">
                                            Action Center
                                        </h2>
                                        <p className="text-blue-100 mt-2 max-w-md text-sm">
                                            Quickly manage your blog and client messages from here.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            onClick={() => {
                                                setEditPost({});
                                                setTab("new-post");
                                            }}
                                            className="bg-white text-blue-700 hover:bg-blue-50 px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-sm"
                                        >
                                            ➕ New Post
                                        </button>
                                        <button
                                            onClick={() => setTab("messages")}
                                            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors border border-blue-500"
                                        >
                                            💬 View Messages
                                            {stats.unreadMessages > 0 && (
                                                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                                    {stats.unreadMessages}
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recent posts table */}
                            <div className="bg-[#1a242d] rounded-xl border border-slate-700 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            Recent Blog Posts
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            Latest entries from your engineering blog.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setTab("blog")}
                                        className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                                    >
                                        Manage All →
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    {posts.length === 0 ? (
                                        <p className="text-slate-500 text-sm p-6">
                                            No posts yet.{" "}
                                            <button
                                                onClick={() => {
                                                    setEditPost({});
                                                    setTab("new-post");
                                                }}
                                                className="text-blue-400 hover:underline"
                                            >
                                                Create your first post.
                                            </button>
                                        </p>
                                    ) : (
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-[#151e26] text-xs uppercase text-slate-500 border-b border-slate-700">
                                                    <th className="px-6 py-3 font-semibold">Title</th>
                                                    <th className="px-6 py-3 font-semibold">Status</th>
                                                    <th className="px-6 py-3 font-semibold">Date</th>
                                                    <th className="px-6 py-3 font-semibold text-right">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-700 text-sm">
                                                {posts.slice(0, 5).map((post) => (
                                                    <tr
                                                        key={post.id}
                                                        className="hover:bg-slate-800/50 transition-colors"
                                                    >
                                                        <td className="px-6 py-4 font-medium text-white">
                                                            {post.title}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span
                                                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${post.is_published
                                                                    ? "bg-green-900/30 text-green-300"
                                                                    : "bg-yellow-900/30 text-yellow-300"
                                                                    }`}
                                                            >
                                                                <span
                                                                    className={`w-1.5 h-1.5 rounded-full ${post.is_published
                                                                        ? "bg-green-500"
                                                                        : "bg-yellow-500"
                                                                        }`}
                                                                />
                                                                {post.is_published ? "Published" : "Draft"}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-slate-400 text-xs">
                                                            {new Date(post.created_at).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <button
                                                                onClick={() => {
                                                                    setEditPost(post);
                                                                    setTab("new-post");
                                                                }}
                                                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm mr-3"
                                                            >
                                                                ✏️
                                                            </button>
                                                            <button
                                                                onClick={() => deletePost(post.id)}
                                                                className="text-slate-400 hover:text-red-400 transition-colors text-sm"
                                                            >
                                                                🗑️
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Blog Posts Tab ─────────────────────────────────────────── */}
                    {tab === "blog" && (
                        <div className="space-y-6 max-w-7xl mx-auto">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">Blog Posts</h2>
                                    <p className="text-slate-400 text-sm">
                                        {stats.totalPosts} total · {stats.publishedPosts} published
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setEditPost({});
                                        setTab("new-post");
                                    }}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                                >
                                    ➕ New Post
                                </button>
                            </div>

                            {posts.length === 0 ? (
                                <div className="bg-[#1a242d] rounded-xl border border-slate-700 p-12 text-center">
                                    <p className="text-slate-400 mb-4">No posts yet.</p>
                                    <button
                                        onClick={() => {
                                            setEditPost({});
                                            setTab("new-post");
                                        }}
                                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                                    >
                                        Create First Post
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-[#1a242d] rounded-xl border border-slate-700 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-[#151e26] text-xs uppercase text-slate-500 border-b border-slate-700">
                                                    <th className="px-6 py-4 font-semibold">Title</th>
                                                    <th className="px-6 py-4 font-semibold">Slug</th>
                                                    <th className="px-6 py-4 font-semibold">Status</th>
                                                    <th className="px-6 py-4 font-semibold">Created</th>
                                                    <th className="px-6 py-4 font-semibold text-right">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-700 text-sm">
                                                {posts.map((post) => (
                                                    <tr
                                                        key={post.id}
                                                        className="hover:bg-slate-800/50 transition-colors group"
                                                    >
                                                        <td className="px-6 py-4 font-medium text-white max-w-xs">
                                                            <span className="line-clamp-1">{post.title}</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-slate-400 font-mono text-xs">
                                                            {post.slug}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <span
                                                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${post.is_published
                                                                    ? "bg-green-900/30 text-green-300"
                                                                    : "bg-yellow-900/30 text-yellow-300"
                                                                    }`}
                                                            >
                                                                <span
                                                                    className={`w-1.5 h-1.5 rounded-full ${post.is_published
                                                                        ? "bg-green-500"
                                                                        : "bg-yellow-500"
                                                                        }`}
                                                                />
                                                                {post.is_published ? "Published" : "Draft"}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-slate-400 text-xs whitespace-nowrap">
                                                            {new Date(post.created_at).toLocaleDateString(
                                                                "en-GB",
                                                                { day: "numeric", month: "short", year: "numeric" }
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4 text-right space-x-2">
                                                            <Link
                                                                href={`/blog/${post.slug}`}
                                                                target="_blank"
                                                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                                                title="View"
                                                            >
                                                                👁️
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                    setEditPost(post);
                                                                    setTab("new-post");
                                                                }}
                                                                className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                                                title="Edit"
                                                            >
                                                                ✏️
                                                            </button>
                                                            <button
                                                                onClick={() => deletePost(post.id)}
                                                                className="text-slate-400 hover:text-red-400 transition-colors text-sm"
                                                                title="Delete"
                                                            >
                                                                🗑️
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── Messages Tab ───────────────────────────────────────────── */}
                    {tab === "messages" && (
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Contact Messages
                                </h2>
                                <p className="text-slate-400 text-sm">
                                    {stats.totalMessages} total · {stats.unreadMessages} unread
                                </p>
                            </div>

                            {messages.length === 0 ? (
                                <div className="bg-[#1a242d] rounded-xl border border-slate-700 p-12 text-center">
                                    <p className="text-slate-400">No messages yet.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`bg-[#1a242d] rounded-xl border p-5 transition-all ${!msg.is_read
                                                ? "border-blue-500/50"
                                                : "border-slate-700"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-semibold text-white">
                                                            {msg.name}
                                                        </h3>
                                                        {!msg.is_read && (
                                                            <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                                                NEW
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-slate-400 text-sm">{msg.email}</p>
                                                </div>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <span className="text-slate-500 text-xs whitespace-nowrap">
                                                        {new Date(msg.created_at).toLocaleDateString("en-GB", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm font-medium text-slate-300 mb-2">
                                                Re: {msg.subject}
                                            </p>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {msg.message}
                                            </p>

                                            <div className="mt-4 flex items-center gap-3">
                                                <a
                                                    href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                                                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                                                >
                                                    ✉️ Reply
                                                </a>
                                                {!msg.is_read && (
                                                    <button
                                                        onClick={() => markMessageRead(msg.id)}
                                                        className="text-xs text-slate-400 hover:text-white border border-slate-600 hover:border-slate-400 px-3 py-1.5 rounded-lg transition-colors"
                                                    >
                                                        Mark Read
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteMessage(msg.id)}
                                                    className="text-xs text-slate-400 hover:text-red-400 transition-colors"
                                                >
                                                    🗑️ Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── New / Edit Post ───────────────────────────────────────── */}
                    {tab === "new-post" && (
                        <div className="max-w-3xl mx-auto space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    {editPost?.id ? "Edit Post" : "New Blog Post"}
                                </h2>
                                <p className="text-slate-400 text-sm">
                                    {editPost?.id
                                        ? `Editing: ${editPost.title}`
                                        : "Create a new entry for your engineering blog."}
                                </p>
                            </div>

                            {saveMsg && (
                                <div
                                    className={`rounded-lg p-3 text-sm ${saveMsg.startsWith("Error")
                                        ? "bg-red-900/30 border border-red-700/50 text-red-300"
                                        : "bg-green-900/30 border border-green-700/50 text-green-300"
                                        }`}
                                >
                                    {saveMsg}
                                </div>
                            )}

                            <div className="bg-[#1a242d] rounded-xl border border-slate-700 p-6 space-y-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-300">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        value={editPost?.title ?? ""}
                                        onChange={(e) =>
                                            setEditPost((p) => ({ ...p, title: e.target.value }))
                                        }
                                        className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="My engineering post title"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-300">
                                        Slug{" "}
                                        <span className="text-slate-500 font-normal">
                                            (auto-generated if blank)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        value={editPost?.slug ?? ""}
                                        onChange={(e) =>
                                            setEditPost((p) => ({ ...p, slug: e.target.value }))
                                        }
                                        className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                                        placeholder="my-engineering-post"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-300">
                                        Excerpt
                                    </label>
                                    <textarea
                                        value={editPost?.excerpt ?? ""}
                                        onChange={(e) =>
                                            setEditPost((p) => ({ ...p, excerpt: e.target.value }))
                                        }
                                        rows={2}
                                        className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Short summary shown in the blog listing…"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-300">
                                        Content *
                                    </label>
                                    <textarea
                                        value={editPost?.content ?? ""}
                                        onChange={(e) =>
                                            setEditPost((p) => ({ ...p, content: e.target.value }))
                                        }
                                        rows={14}
                                        className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y font-mono text-sm"
                                        placeholder="Write your full article here…"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-slate-300">
                                        Cover Image URL
                                    </label>
                                    <input
                                        type="text"
                                        value={editPost?.cover_image_path ?? ""}
                                        onChange={(e) =>
                                            setEditPost((p) => ({
                                                ...p,
                                                cover_image_path: e.target.value,
                                            }))
                                        }
                                        className="w-full px-4 py-3 bg-[#101922] border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="https://example.com/cover.jpg"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setEditPost((p) => ({
                                                ...p,
                                                is_published: !p?.is_published,
                                            }))
                                        }
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${editPost?.is_published ? "bg-blue-600" : "bg-slate-600"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${editPost?.is_published
                                                ? "translate-x-6"
                                                : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                    <label className="text-sm text-slate-300">
                                        {editPost?.is_published ? "Published" : "Draft"}
                                    </label>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        onClick={savePost}
                                        disabled={saving}
                                        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
                                    >
                                        {saving ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Saving…
                                            </>
                                        ) : (
                                            "💾 Save Post"
                                        )}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditPost(null);
                                            setTab("blog");
                                        }}
                                        className="border border-slate-600 hover:border-slate-400 text-slate-400 hover:text-white px-6 py-3 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

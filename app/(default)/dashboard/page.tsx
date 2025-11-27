'use client';

import { useAuth } from '@/components/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push('/signin');
    };

    return (
        <ProtectedRoute>
            <section className="relative">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="pb-12 text-center">
                            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                                Dashboard
                            </h1>
                            <p className="mt-4 text-lg text-gray-400">
                                Welcome to your protected dashboard!
                            </p>
                        </div>

                        {/* User Info Card */}
                        <div className="mx-auto max-w-2xl">
                            <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm">
                                <h2 className="mb-6 text-2xl font-semibold text-gray-200">
                                    User Information
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                                        <span className="text-sm font-medium text-gray-400">Email</span>
                                        <span className="text-gray-200">{user?.email}</span>
                                    </div>

                                    <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                                        <span className="text-sm font-medium text-gray-400">User ID</span>
                                        <span className="font-mono text-sm text-gray-200">{user?.id}</span>
                                    </div>

                                    {user?.user_metadata?.name && (
                                        <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                                            <span className="text-sm font-medium text-gray-400">Name</span>
                                            <span className="text-gray-200">{user.user_metadata.name}</span>
                                        </div>
                                    )}

                                    {user?.user_metadata?.company && (
                                        <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                                            <span className="text-sm font-medium text-gray-400">Company</span>
                                            <span className="text-gray-200">{user.user_metadata.company}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between border-b border-gray-700/50 pb-4">
                                        <span className="text-sm font-medium text-gray-400">Email Confirmed</span>
                                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${user?.email_confirmed_at
                                                ? 'bg-green-500/10 text-green-400'
                                                : 'bg-yellow-500/10 text-yellow-400'
                                            }`}>
                                            {user?.email_confirmed_at ? 'Confirmed' : 'Pending'}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pb-4">
                                        <span className="text-sm font-medium text-gray-400">Created At</span>
                                        <span className="text-gray-200">
                                            {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <button
                                        onClick={handleSignOut}
                                        className="btn flex-1 bg-gradient-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                                    >
                                        Sign Out
                                    </button>
                                    <button
                                        onClick={() => router.push('/')}
                                        className="btn flex-1 bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 hover:bg-[length:100%_150%]"
                                    >
                                        Go to Home
                                    </button>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="mt-6 rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                                <p className="text-sm text-indigo-200">
                                    <strong>Note:</strong> This is a protected page. Only authenticated users can access this dashboard.
                                    Try signing out and accessing this page directly - you'll be redirected to the sign-in page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ProtectedRoute>
    );
}

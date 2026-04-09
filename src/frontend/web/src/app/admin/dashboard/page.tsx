'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, LogOut, FileText, ChevronRight } from 'lucide-react';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin/login');
        return;
      }

      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black text-primary-dark">Insights Dashboard</h1>
          <p className="text-slate-500 font-medium">Manage your blog posts and updates.</p>
        </div>
        <div className="flex space-x-4">
          <Link 
            href="/admin/blog/new" 
            className="bg-primary text-white p-4 rounded-2xl flex items-center space-x-2 font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="p-4 bg-white text-slate-400 hover:text-red-500 transition-all rounded-2xl border border-slate-100"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      ) : (
        <div className="grid gap-6">
          {blogs.length === 0 ? (
            <div className="bg-white p-12 rounded-[32px] text-center border border-dashed border-slate-200">
              <FileText className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-400 font-bold italic">No posts found. Start by creating one!</p>
            </div>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-50 flex items-center justify-between hover:shadow-md transition-all">
                <div className="flex items-center space-x-6">
                   <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                     <FileText className="text-primary" />
                   </div>
                   <div>
                     <h3 className="text-xl font-black text-primary-dark">{blog.title}</h3>
                     <div className="flex items-center space-x-3 mt-1">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${blog.published ? 'bg-teal-50 text-teal-600' : 'bg-amber-50 text-amber-600'}`}>
                         {blog.published ? 'Published' : 'Draft'}
                       </span>
                       <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                         {new Date(blog.created_at).toLocaleDateString()}
                       </span>
                     </div>
                   </div>
                </div>
                <Link href={`/admin/blog/edit/${blog.id}`} className="p-4 bg-slate-50 text-primary-dark rounded-2xl hover:bg-primary hover:text-white transition-all">
                   <ChevronRight />
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

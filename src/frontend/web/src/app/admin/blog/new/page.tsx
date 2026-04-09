'use client';

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function NewBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/admin/login');
      return;
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const { error } = await supabase.from('blogs').insert({
      title,
      slug,
      content,
      image_url: imageUrl,
      author_id: user.id,
      published: true
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/admin/dashboard" className="inline-flex items-center space-x-2 text-slate-400 hover:text-primary transition-all mb-8 font-bold uppercase tracking-widest text-xs">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </Link>

      <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-50">
        <h1 className="text-3xl font-black text-primary-dark mb-10">Create New Insight</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Post Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-xl font-bold text-primary-dark"
              placeholder="e.g. How Digital Marketing is changing Rishikesh"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Featured Image URL</label>
            <div className="relative">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all pr-14"
                placeholder="https://images.unsplash.com/..."
              />
              <ImageIcon className="absolute right-6 top-4 text-slate-200" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Content (Markdown supported)</label>
            <textarea
              required
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-slate-50 border-none py-6 px-8 rounded-[32px] focus:ring-2 focus:ring-primary outline-none transition-all resize-none leading-relaxed text-slate-600 font-medium"
              placeholder="Tell your story..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            {loading ? (
              <span>Publishing...</span>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Publish Insight</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

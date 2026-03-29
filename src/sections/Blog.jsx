import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../services/hashnodeService'
import { inView, motion } from 'framer-motion'
import { FaHashnode } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Blog = () => {

    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts()
            setPostData(data)
            setLoading(false)
        }
        getPosts()
    }, [])

    return (
        <section id='blog' className="section-padding bg-gray-50 dark:bg-gray-900/50">

            {/* 🔥 Ambient glow (same as hero) */}
            <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">

                {/* Header (same style as About) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="font-mono text-accent text-sm tracking-widest uppercase">
                        05 — Blogs
                    </span>

                    <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 dark:text-white mt-2">
                        Insights & Articles
                    </h2>
                </motion.div>

                {/* Loading */}
                {loading ? (
                    <p className="text-center text-gray-400 animate-pulse">Loading blogs...</p>
                ) : (

                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {postData.map((post, i) => (
                                <motion.a
                                    key={i}
                                    href={post.node.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 hover:border-accent/30 transition-all duration-300 shadow-md hover:shadow-xl"
                                >

                                    {/* Image */}
                                    <div className="overflow-hidden">
                                        <img
                                            src={post.node.coverImage?.url}
                                            alt={post.node.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">

                                        <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-accent transition">
                                            {post.node.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                                            {post.node.seo?.description || "Read this article to explore more..."}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                                            <span>
                                                {new Date(post.node.publishedAt).toLocaleDateString()}
                                            </span>

                                            <span className="group-hover:translate-x-1 transition">
                                                →
                                            </span>
                                        </div>

                                    </div>

                                    {/* 🔥 Hover Glow Border */}
                                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/40 pointer-events-none transition" />

                                </motion.a>
                            ))}

                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6 }}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-500 dark:text-gray-400 mb-4">Want to see more?</p>
                            <motion.a
                                href="https://blog.rohitchornele.online/"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 btn-outline"
                            >
                                <FaHashnode size={18} />
                                View all on Blog Page
                                <FaExternalLinkAlt size={16} />
                            </motion.a>
                        </motion.div>

                    </>

                )}
            </div>
        </section>
    )
}

export default Blog
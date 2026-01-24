"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilter } from "@/components/search-filter"
import InfiniteScroll from "react-infinite-scroll-component"
import { BlogPostSkeleton } from "@/components/ui/loading-skeleton"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [hasMore, setHasMore] = useState(true)
  const pageRef = useRef(1)
  const [loading, setLoading] = useState(true)

  const fetchPosts = useCallback(async () => {
    const currentPage = pageRef.current
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newPosts = Array.from({ length: POSTS_PER_PAGE }, (_, i) => ({
      id: `post-${currentPage}-${i}`,
      title: `Blog Post ${currentPage * POSTS_PER_PAGE + i}`,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      date: new Date().toISOString(),
      readTime: "5 min read",
      tags: ["Tech", "Programming", "Web Dev"],
      slug: `blog-post-${currentPage}-${i}`
    }))

    setPosts(prev => [...prev, ...newPosts])
    pageRef.current = currentPage + 1
    setHasMore(currentPage < 5)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold animate-fade-down">
              Blog
            </h1>
            <p className="mb-8 text-lg text-muted-foreground animate-fade-up">
              Latest updates, guides, and insights
            </p>
          </div>

          <SearchFilter
            onSearch={() => {}}
            onFilter={() => {}}
            filterOptions={["Tech", "Programming", "Web Dev"]}
          />

          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={hasMore}
            loader={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <BlogPostSkeleton key={i} />
                ))}
              </div>
            }
          >
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card 
                  key={post.id}
                  className="hover-card-effect glass-effect"
                >
                  <CardHeader className="p-3 sm:p-6">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6">
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
} 
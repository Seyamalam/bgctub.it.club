"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilter } from "@/components/search-filter"
import InfiniteScroll from "react-infinite-scroll-component"
import { BlogPostSkeleton } from "@/components/ui/loading-skeleton"
import { MatrixBackground } from "@/components/matrix-background"

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
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // This is where you'd normally fetch from your API
    const newPosts = Array.from({ length: POSTS_PER_PAGE }, (_, i) => ({
      id: `post-${page}-${i}`,
      title: `Blog Post ${page * POSTS_PER_PAGE + i}`,
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      date: new Date().toISOString(),
      readTime: "5 min read",
      tags: ["Tech", "Programming", "Web Dev"],
      slug: `blog-post-${page}-${i}`
    }))

    setPosts(prev => [...prev, ...newPosts])
    setPage(prev => prev + 1)
    setHasMore(page < 5) // Limit to 5 pages for demo
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixBackground />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card 
                  key={post.id}
                  className="hover-card-effect glass-effect"
                >
                  <CardHeader>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
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
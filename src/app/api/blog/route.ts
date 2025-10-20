import { getPublishedPosts } from '@/lib/blogRepo'
import { NextResponse } from 'next/server'

export const GET = async () => {
	try {
		const posts = await getPublishedPosts()
		return NextResponse.json({ posts }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch posts' },
			{ status: 500 }
		)
	}
}

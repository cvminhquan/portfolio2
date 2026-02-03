import { getPostBySlug } from '@/lib/blogRepo'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> }
) => {
	const { slug } = await params
	if (!slug) {
		return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
	}

	try {
		const post = await getPostBySlug(slug)
		if (!post) {
			return NextResponse.json({ error: 'Post not found' }, { status: 404 })
		}
		return NextResponse.json({ post }, { status: 200 })
	} catch {
		return NextResponse.json(
			{ error: 'Failed to fetch post' },
			{ status: 500 }
		)
	}
}

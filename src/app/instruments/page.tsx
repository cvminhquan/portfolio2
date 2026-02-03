import { createClient } from '@/utils/supabase/server'

type Instrument = {
	id: number
	name: string
}

const Instruments = async () => {
	const supabase = await createClient()
	const { data, error } = await supabase.from('instruments').select('*')
	if (error) {
		return (
			<pre className="mx-auto max-w-xl overflow-auto rounded-md bg-red-50 p-4 text-sm text-red-700">
				{error.message}
			</pre>
		)
	}
	return (
		<pre className="mx-auto max-w-xl overflow-auto rounded-md bg-zinc-900 p-4 text-zinc-100">
			{JSON.stringify(data as Instrument[], null, 2)}
		</pre>
	)
}

export default Instruments

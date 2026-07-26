import { ModeToggle } from '@/components/mode-toggle';
import { requireUnauth } from '@/features/auth/actions';

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	await requireUnauth();
	return (
		<div className="flex min-h-full flex-1 flex-col items-center justify-center bg-muted/40 px-4 py-12">
			<div className="absolute top-5 right-5">
				<ModeToggle />
			</div>
			<div className="w-full max-w-sm">{children}</div>
		</div>
	);
}

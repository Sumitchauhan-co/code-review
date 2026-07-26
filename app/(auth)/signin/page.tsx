import Image from 'next/image';
import type { Metadata } from 'next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldSet,
} from '@/components/ui/field';
import { GithubSignInForm } from '@/features/auth/components/github-signin-form';
import { ModeToggle } from '@/components/mode-toggle';

export const metadata: Metadata = {
	title: 'Sign in',
	description: 'Sign in to Code Reviewer with your GitHub account.',
};

type SignInPageProps = {
	searchParams: Promise<{ callbackUrl?: string }>;
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
	const { callbackUrl } = await searchParams;

	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-8">
			<div className="absolute right-4 top-4 md:right-8 md:top-8">
				<ModeToggle />
			</div>

			<div className="w-full max-w-md space-y-4">
				<Card className="w-full border-border/60 shadow-xl backdrop-blur-sm">
					<CardHeader className="space-y-3 pb-6 text-center">
						<div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 p-3 shadow-inner">
							{/* Light mode logo */}
							<Image
								src="/logo.svg"
								alt="Code Reviewer"
								width={40}
								height={40}
								priority
								className="block dark:hidden"
							/>
							{/* Dark mode logo */}
							<Image
								src="/logo(dark).svg"
								alt="Code Reviewer"
								width={40}
								height={40}
								priority
								className="hidden dark:block"
							/>
						</div>
						<CardTitle className="text-2xl font-bold tracking-tight">
							Welcome back
						</CardTitle>
						<CardDescription className="text-base text-muted-foreground">
							Sign in with GitHub to review and manage your code.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<FieldSet>
							<FieldGroup>
								<Field>
									<GithubSignInForm callbackUrl={callbackUrl} />
									<FieldDescription className="mt-4 text-center text-sm text-muted-foreground/80 leading-relaxed">
										We only request the permissions needed to identify your
										account. You can revoke access anytime from GitHub settings.
									</FieldDescription>
								</Field>
							</FieldGroup>
						</FieldSet>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default SignInPage;

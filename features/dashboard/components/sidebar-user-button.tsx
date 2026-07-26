'use client';

import { ModeToggle } from '@/components/mode-toggle';
import {
	SidebarMenu,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { UserMenu, UserMenuUser } from '@/features/auth/components/user-menu';

type SidebarUserButtonProps = {
	user: UserMenuUser;
	plan?: string;
};

export function SidebarUserButton({ user, plan }: SidebarUserButtonProps) {
	const { state } = useSidebar();
	const isCollapsed = state === 'collapsed';

	return (
		<SidebarMenu>
			<SidebarMenuItem
				className={`w-full gap-2 transition-all duration-200 ${
					isCollapsed
						? 'flex flex-col items-center justify-center'
						: 'flex items-center'
				}`}
			>
				<div className="w-full min-w-0 flex-1">
					<UserMenu
						user={user}
						plan={plan}
						variant="profile"
						isCollapsed={isCollapsed}
						className="w-full [&_button]:h-12 [&_button]:w-full [&_button]:gap-2 [&_button]:px-2"
					/>
				</div>
				<div className="flex h-12 shrink-0 items-center justify-center">
					<ModeToggle />
				</div>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

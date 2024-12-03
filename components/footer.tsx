import type { Translation } from "../utils/types.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
	<div class="col-span-2 lg:col-span-1 flex gap-1 items-center mt-1 justify-between">
		{/* Logo Section */}
	
		<a
			href="/imprint"
			class="hover:text-gray-600 transition-colors relative w-8"
		>
			{data.translation.imprint}
		</a>
			<a class="relative w-8"
				width="16"
				height="16"
			>
				<img
					src="pixels/drwebf1.png"
					alt="Logo"
					class="w-full"
				/>
			</a>
			{/* Social Links */}

		<a href="https://github.com/DataPhaseDan" class="relative w-4 hover:opacity-80 transition-opacity" width="16" height="16">

				<img
					loading="lazy"
					src="vectors/github.svg"
					alt="Logo von GitHub"
					class=" w-full"

				/>
			</a>


		<a href="https://linkedin.com/in/daniel-renner-b9100833a" class="hover:opacity-80 transition-opacity relative w-8" >
				<img
					loading="lazy"
					src="vectors/linkedin.svg"
					alt="Logo von LinkedIn"
					class=" w-full "
					width="16"
					height="16"
				/>
			</a>


		<a href="https://www.xing.com/profile/Daniel_Renner070501/web_profiles" class="hover:opacity-80 transition-opacity relative w-4">
				<img
					loading="lazy"
					src="vectors/xing.svg"
					alt="Logo von Xing"
					class=" w-full"
					width="16"
					height="16"
				/>
			</a>


			{/* Fresh Badge */}

			<a href="https://fresh.deno.dev" class="hover:opacity-80 transition-opacity relative w-8">
				<img
					loading="lazy"
					src="https://fresh.deno.dev/fresh-badge-dark.svg"
					alt="Made with Fresh"
					class=" w-full "
				/>
			</a>



			<a
				href="/privacy"
			class="hover:text-gray-600 transition-colors relative w-8"
			>
				{data.translation.privacy}
			</a>

		</div>
	
);
export default Footer;


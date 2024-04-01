export default function Footer() {
    return (
        <footer class="inset-x-0 bottom-0 py-2 rounded-lg bg-[#F7F9FC]">
            <div class="w-full mx-auto max-w-screen-xl px-12 py-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Myna Labs AI</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/glam_app/?hl=en" target="_blank" class="hover:underline me-4 md:me-6 font-normal">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/glam-labs?trk=profile-position" target="_blank" class="hover:underline me-4 md:me-6 font-normal">LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:contact@glamlabs.app" class="hover:underline me-4 md:me-6 font-normal">Licensing</a>
                    </li>
                    <li>
                        <a href="mailto:contact@glamlabs.app" class="hover:underline font-normal">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

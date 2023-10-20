import { GraduationCap, FolderKanban, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section className="max-sm:mt-5">
      <h3 className="text-lg font-medium max-sm:text-center">Navegação</h3>

      <ul className="mt-3 text-sm font-medium flex flex-row xl:flex-col gap-2">
        <li className="flex gap-x-3">
          <GraduationCap className="text-primary-500 w-6 h-6" />
          <Link href="/pomodoro" className="hover:underline underline-offset-4">
            Pomodoro
          </Link>
        </li>
        <li className="flex gap-x-3">
          <FolderKanban className="text-primary-500 w-6 h-6" />
          <Link href="/projects" className="hover:underline underline-offset-4">
            Projetos
          </Link>
        </li>
        <li className="flex gap-x-3">
          <CalendarCheck className="text-primary-500 w-6 h-6" />
          <Link href="/agenda" className="hover:underline underline-offset-4">
            Agenda
          </Link>
        </li>
      </ul>
    </section>
  );
}

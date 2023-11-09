import { GraduationCap, FolderKanban, CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section className="text-foreground">
      <h3 className="text-lg font-bold">Navegação</h3>
      <ul className="mt-3 text-base font-medium">
        <li className="flex">
          <Link href="#plan" className="hover:underline underline-offset-4">
            Planejamento
          </Link>
        </li>
        <li className="flex">
          <Link href="/academia" className="hover:underline underline-offset-4">
            Academia
          </Link>
        </li>
        <li className="flex">
          <Link href="#tools" className="hover:underline underline-offset-4">
            Ferramentas
          </Link>
        </li>
      </ul>
    </section>
  );
}

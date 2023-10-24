'use client';

import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import ThemeSwitch from './ThemeSwitcher';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';

export default function ProSidebar() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex h-[100%] min-h-[400px]">
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
        backgroundColor=""
        className="bg-background text-left"
        rtl
      >
        <Menu
          rootStyles={{
            [`.ps-menu-button`]: {
              textAlign: 'left',
            },
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: disabled ? '#000/' : '#f1f2f3',
                  backgroundColor: active ? '#191a19' : undefined,
                  textAlign: 'left',
                  '&:hover': {
                    backgroundColor: '#191a19 !important',
                    color: 'white !important',
                    borderRadius: '8px !important',
                    fontWeight: 'bold !important',
                  },
                };
              }
            },
          }}
        >
          <div className="w-full flex-start pt-5">
            <SignedIn>
              <UserButton showName={true} />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

          <h3 className="text-left pt-5 pb-3 font-bold mx-5 border-b border-slate-300/40">
            Geral
          </h3>
          <MenuItem
            className="text-left"
            rootStyles={{
              fontSize: '14px',
            }}
            suffix={
              <Image
                src="/sidebar/planning.png"
                width={30}
                height={30}
                alt="planninng"
              />
            }
          >
            Planejamento
          </MenuItem>
          <MenuItem
            className="text-left"
            rootStyles={{
              fontSize: '14px',
            }}
            suffix={
              <Image
                src="/sidebar/tools.png"
                width={30}
                height={30}
                alt="planninng"
              />
            }
          >
            Ferramentas
          </MenuItem>
          <MenuItem
            className="text-left"
            rootStyles={{
              fontSize: '14px',
            }}
            suffix={
              <Image
                src="/sidebar/gym2.png"
                width={30}
                height={30}
                alt="planninng"
              />
            }
          >
            Academia
          </MenuItem>

          <h3 className="text-left pt-5 pb-3 font-bold mx-5 border-b border-slate-300/40">
            Temas
          </h3>

          <ThemeSwitch />
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <Button className="sb-button" onClick={() => setToggled(!toggled)}>
            <MenuIcon />
          </Button>
        </div>
      </main>
    </div>
  );
}

'use client';
import React, { useContext, useEffect, useRef } from 'react';
import { stages } from '../constants/constants';
import ModalInput from './ModalInput';
import { FormDataContext } from '../context/FormDataContext';
import { Button } from '@/components/ui/button';

type Props = {
  isSettingsOn: any;
  setIsSettingsOn: any;
  setPomodoro: any;
};

const Modal = ({ isSettingsOn, setIsSettingsOn, setPomodoro }: Props) => {
  const { formData, setFormData } = useContext<any>(FormDataContext);
  const modalRef = useRef();
  function handleSubmit(e: any) {
    e.preventDefault();
    setPomodoro((prevPomodoro: any) => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoroTime * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
    setIsSettingsOn(false);
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleOutsideClick(e: any) {
    //@ts-ignore
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsSettingsOn(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <>
      {isSettingsOn && (
        <div
          className={`block modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background  rounded-2xl text-pmd-blue-800 p-5 shadow-2xl`}
          //@ts-ignore
          ref={modalRef}
        >
          <div className="flex pb-6 justify-between items-center">
            <h2 className="font-bold text-xl">Personalizar</h2>
            <button onClick={() => setIsSettingsOn(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="uppercase tracking-wider font-bold text-sm py-3">
              Tempo (minutos)
            </h3>

            <form
              className="flex flex-col justify-betweenr items-center"
              onSubmit={handleSubmit}
            >
              <div className="flex items-end justify-center gap-x-2">
                <ModalInput
                  label={'Pomodoro'}
                  name={'pomodoroTime'}
                  defaultValue={formData.pomodoroTime}
                  //@ts-ignore
                  setFormData={setFormData}
                  onChange={handleInputChange}
                />
                <ModalInput
                  label={'Pausa pequena'}
                  name={'shortBreakTime'}
                  defaultValue={formData.shortBreakTime}
                  //@ts-ignore
                  setFormData={setFormData}
                  onChange={handleInputChange}
                />
                <ModalInput
                  label={'Pausa Longa'}
                  name={'longBreakTime'}
                  defaultValue={formData.longBreakTime}
                  //@ts-ignore
                  setFormData={setFormData}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                type="submit"
                className="rounded-2xl mt-4 font-bold shadow-xl hover:underline underline-offset-4"
              >
                Aplicar
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

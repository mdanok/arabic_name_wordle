import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div
      style={{ width: '18rem' }}
      className="mx-auto mt-2 mb-4 flex items-center"
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap');
      </style>
      <p
        style={{ fontFamily: 'Amiri Quran, serif', fontSize: '1.50rem' }}
        className="grow dark:text-white"
      >
        {GAME_TITLE}
      </p>
      <div className="flex">
        <CogIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsSettingsModalOpen(true)}
        />
        <ChartBarIcon
          className="mr-0 h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsStatsModalOpen(true)}
        />
      </div>
      <div className="flex">
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        {ENABLE_ARCHIVED_GAMES && (
          <CalendarIcon
            className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsDatePickerModalOpen(true)}
          />
        )}
      </div>
      <hr></hr>
    </div>
  )
}

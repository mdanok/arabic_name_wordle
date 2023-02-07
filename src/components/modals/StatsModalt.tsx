import { ClockIcon, ShareIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import Countdown from 'react-countdown'

import {
  DATE_LOCALE,
  ENABLE_ARCHIVED_GAMES,
  ENABLE_MIGRATE_STATS,
} from '../../constants/settings'
import {
  ARCHIVE_GAMEDATE_TEXT,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  STATISTICS_TITLE,
} from '../../constants/strings'
import { GameStats } from '../../lib/localStorage'
import { getText, shareStatus } from '../../lib/share'
import { solutionGameDate, tomorrow } from '../../lib/words'
import { Histogram } from '../stats/Histogram'
import { MigrationIntro } from '../stats/MigrationIntro'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isLatestGame: boolean
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  handleShareFailure: () => void
  handleMigrateStatsButton: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const EndStatOpen = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  handleShareFailure,
  handleMigrateStatsButton,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  var guessesob = getText(
    solution,
    guesses,
    isGameLost,
    isHardMode,
    isDarkMode,
    isHighContrastMode
  ).split('\n')
  var final = guessesob.map((number) => (
    <div className="mb-1 flex justify-center">
      {number.split(' ').map((numbers) => (
        <>
          {numbers === '🟩' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-green-500 text-lg font-bold"></div>
          )}
          {numbers === '🟧' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-orange-500 text-lg font-bold"></div>
          )}
          {numbers === '⬜' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-white text-lg font-bold"></div>
          )}
          {numbers === '⬛' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-black text-lg font-bold"></div>
          )}
          {numbers === '🟨' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-yellow-500 text-lg font-bold"></div>
          )}
          {numbers === '🟦' && (
            <div className="mx-0.5 flex h-10 w-10 items-center justify-center rounded border-2 border-solid border-slate-200 bg-blue-500 text-lg font-bold"></div>
          )}
        </>
      ))}
    </div>
  ))
  console.log(guessesob)
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        {ENABLE_MIGRATE_STATS && (
          <MigrationIntro handleMigrateStatsButton={handleMigrateStatsButton} />
        )}
      </BaseModal>
    )
  }
  return (
    <BaseModal title={'أحسنت صنعًا'} isOpen={isOpen} handleClose={handleClose}>
      <div className="mx-auto flex h-12 w-12 items-center justify-center text-4xl">
        {isHardMode ? '🥇' : '🥈'}
      </div>
      {!isHardMode && (
        <div className="mt-3 text-center sm:mt-5">
          <div className="mt-3 text-sm text-slate-500 dark:text-gray-100">
            فعّل المستوى الصعب في نافذة الإعدادات
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="m-1 inline h-5 w-5 cursor-pointer dark:stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            لفرصة الحصول على 🥇.
          </div>
        </div>
      )}
      <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
        <button className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 p-1 text-base text-slate-900  shadow-sm sm:text-sm">
          <a
            href={'https://www.almaany.com/ar/dict/ar-ar/' + solution}
            target="_blank"
            rel="noreferrer"
          >
            📖&nbsp;&nbsp;&nbsp;تعرّف على معنى&nbsp;{' '}
            <b>
              <i>{solution}</i>
            </b>
          </a>
        </button>
      </h3>
      <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
        <button className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 p-1 text-base text-slate-900  shadow-sm sm:text-sm">
          <a
            href={
              'https://surahquran.com/quran-search/search.php?search_word=' +
              solution
            }
            target="_blank"
            rel="noreferrer"
          >
            🕋&nbsp;&nbsp;&nbsp;تعرّف على مواضع ورود كلمة &nbsp;
            <b>
              <i>{solution}</i>
            </b>
            &nbsp;في القران الكريم
          </a>
        </button>
      </h3>
      <div className="mt-5">
        <div>{final}</div>
      </div>
      {(isGameLost || isGameWon) && (
        <>
          <div className="mt-4 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">
            <div className="inline-block w-full text-center">
              {(!ENABLE_ARCHIVED_GAMES || isLatestGame) && (
                <div>
                  <h5>{NEW_WORD_TEXT}</h5>
                  <Countdown
                    className="text-lg font-medium text-gray-900 dark:text-gray-100"
                    date={tomorrow}
                    daysInHours={true}
                  />
                </div>
              )}
              {ENABLE_ARCHIVED_GAMES && !isLatestGame && (
                <div className="mt-1 inline-flex">
                  <ClockIcon className="mr-1 mt-2 mt-1 h-5 w-5 stroke-black dark:stroke-white" />
                  <div className="mt-1 ml-1 text-center text-sm sm:text-base">
                    <strong>{ARCHIVE_GAMEDATE_TEXT}:</strong>
                    <br />
                    {format(solutionGameDate, 'd MMMM yyyy', {
                      locale: DATE_LOCALE,
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              type="button"
              className="sm:text-bg mt-2 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                shareStatus(
                  solution,
                  guesses,
                  isGameLost,
                  isHardMode,
                  isDarkMode,
                  isHighContrastMode,
                  handleShareToClipboard,
                  handleShareFailure
                )
              }}
            >
              📋 {SHARE_TEXT} النتيجة (انسخ)
            </button>
          </div>
        </>
      )}
    </BaseModal>
  )
}

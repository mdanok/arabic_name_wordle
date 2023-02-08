import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="كيفية اللعب" isOpen={isOpen} handleClose={handleClose}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
      </style>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="text-sm text-gray-500 dark:text-gray-300"
      >
        خمِّن الكلمة <span style={{ fontWeight: '700' }}>القرآنية</span> في 6
        محاولات. سيتغيّر لون المربعات بعد كل محاولة لإظهار مدى قرب تخمينك من
        الكلمة.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ا"
          status="correct"
        />
        <Cell value="ب" isCompleted={true} />
        <Cell value="ت" isCompleted={true} />
        <Cell value="س" isCompleted={true} />
        <Cell value="م" isCompleted={true} />
      </div>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="text-sm text-gray-500 dark:text-gray-300"
      >
        الحرف الألف موجود في الكلمة وفي المكان الصحيح.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ي" isCompleted={true} />
        <Cell value="ت" isCompleted={true} />
        <Cell isCompleted={true} value="ح" />
        <Cell
          value="د"
          isCompleted={true}
          status="present"
          isRevealing={true}
        />
        <Cell value="ث" isCompleted={true} />
      </div>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="text-sm text-gray-500 dark:text-gray-300"
      >
        الحرف الدال موجود في الكلمة ولكن في المكان الخطأ.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ج" isCompleted={true} />
        <Cell value="س" isCompleted={true} />
        <Cell value="ي" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="م" status="absent" />
        <Cell value="ة" isCompleted={true} />
      </div>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="text-sm text-gray-500 dark:text-gray-300"
      >
        الحرف الميم ليس في الكلمة في أي مكان.
      </p>

      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="mt-5 text-sm italic text-gray-500 dark:text-gray-300"
      >
        هذه اللعبة هي النسخة العربية من لعبة{' '}
        <a
          style={{ fontWeight: '700' }}
          href="https://ar.wikipedia.org/wiki/%D9%88%D9%88%D8%B1%D8%AF%D9%84"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Wordle
        </a>{' '}
        الشهيرة.
        <br />
        {/*<a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          تحقق من الكود هنا
  </a>{' '}*/}
      </p>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="mt-5 text-xs text-gray-500 dark:text-gray-300"
      >
        شرح الكلمات يعرضه{' '}
        <a
          style={{ fontWeight: '700' }}
          href="https://www.almaany.com/"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          قاموس المعاني
        </a>{' '}
      </p>
      <p
        style={{ fontFamily: 'Almarai, sans-serif' }}
        className="mt-1 text-xs text-gray-500 dark:text-gray-300"
      >
        مواضع ورود الكلمة في القرآن يعرضه موقع{' '}
        <a
          style={{ fontWeight: '700' }}
          href="https://surahquran.com/"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          سورة قرآن
        </a>{' '}
      </p>
    </BaseModal>
  )
}

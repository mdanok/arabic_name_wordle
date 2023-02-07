import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="كيفية اللعب" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        خمن الكلمة في 6 محاولات. بعد كل تخمين ، سيتغير لون المربعات لإظهار مدى
        قرب تخمينك من الكلمة الصحيح.
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
      <p className="text-sm text-gray-500 dark:text-gray-300">
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
      <p className="text-sm text-gray-500 dark:text-gray-300">
        الحرف الدال موجود في الكلمة ولكن في المكان الخطأ.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ج" isCompleted={true} />
        <Cell value="س" isCompleted={true} />
        <Cell value="ي" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="م" status="absent" />
        <Cell value="ة" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        الحرف الميم ليس في الكلمة في أي مكان.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        هذه نسخة مفتوحة المصدر من لعبة التخمين التي نعرفها جميعًا حب -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          تحقق من الكود هنا
        </a>{' '}
      </p>
    </BaseModal>
  )
}

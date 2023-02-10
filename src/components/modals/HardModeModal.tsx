import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const HardModeModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="كيفية اللعب" isOpen={isOpen} handleClose={handleClose}>
      <p className="py-2 text-sm text-gray-500 dark:text-gray-300">
        تمّ تفعيل &nbsp;<b>المستوى الصعب</b>،&nbsp;بإمكانك تعطيله متى شئت!
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        في هذا المستوى يجب أن تستخدم جميع التلميحات التي حصلت عليها في تخمينك
        القادم:
      </p>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ا"
          status="correct"
        />
        <Cell value="ن" isCompleted={true} />
        <Cell value="س" isCompleted={true} />
        <Cell value="ا" isCompleted={true} />
        <Cell value="م" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        يجب أن تستخدم حرف الألف في المربع الأول.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ب" isCompleted={true} />
        <Cell value="ا" isCompleted={true} />
        <Cell isCompleted={true} value="س" />
        <Cell
          value="ل"
          isCompleted={true}
          status="present"
          isRevealing={true}
        />
        <Cell value="ة" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        يجب أن تستخدم حرف اللام في مكان ما.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="ت" isCompleted={true} />
        <Cell value="م" isCompleted={true} />
        <Cell
          value="ا"
          isRevealing={true}
          isCompleted={true}
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ر"
          status="present"
        />
        <Cell
          value="ه"
          isRevealing={true}
          isCompleted={true}
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        يجب أن تستخدم حرف الألف في المربع الثالث، وحرف الهاء في المربع الأخير،
        وحرف الراء في مكان ما.
      </p>
    </BaseModal>
  )
}

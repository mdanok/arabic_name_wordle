export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['عمل جيد!', 'رائع', 'احسنت!']
export const GAME_COPIED_MESSAGE = 'تم نسخ اللعبة إلى الحافظة'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'لا توجد أحرف كافية'
export const WORD_NOT_FOUND_MESSAGE = 'لم يتم العثور على الكلمة'
export const HARD_MODE_ALERT_MESSAGE = 'يمكن تفعيل الوضع الصعب فقط في البداية!'
export const HARD_MODE_DESCRIPTION =
  'يجب استخدام أي تلميحات تم الكشف عنها في التخمينات اللاحقة'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'لتحسين رؤية الألوان'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `الكلمة كانت ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `يجب عليك استخدام ${guess} في الموضع ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `التخمين يجب ان يتضمن ${letter}`
export const ENTER_TEXT = '↵'
export const DELETE_TEXT = 'مسح'
export const STATISTICS_TITLE = 'احصائيات'
export const GUESS_DISTRIBUTION_TEXT = 'توزيع التخمين'
export const NEW_WORD_TEXT = 'الكلمة الجديد في'
export const SHARE_TEXT = 'شارك'
export const SHARE_FAILURE_TEXT =
  'غير قادر على مشاركة النتائج. هذه الميزة متاحة فقط في السياقات الآمنة (HTTPS) ، في بعض أو كل المتصفحات الداعمة.'
export const MIGRATE_BUTTON_TEXT = 'نقل'
export const MIGRATE_DESCRIPTION_TEXT = 'انقر هنا لنقل إحصائياتك إلى جهاز جديد.'
export const TOTAL_TRIES_TEXT = 'مجموع المحاولات'
export const SUCCESS_RATE_TEXT = 'معدل النجاح'
export const CURRENT_STREAK_TEXT = 'النجاحات المتواصلة'
export const BEST_STREAK_TEXT = 'افضل نجاح'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'أنت تستخدم مستعرضًا مضمنًا وقد تواجه مشكلات في مشاركة نتائجك أو حفظها. نحن نشجعك بدلاً من ذلك على استخدام المتصفح الافتراضي لجهازك.'

export const DATEPICKER_TITLE = 'اختر تاريخًا في الماضي'
export const DATEPICKER_CHOOSE_TEXT = 'اختار'
export const DATEPICKER_TODAY_TEXT = 'اليوم'
export const ARCHIVE_GAMEDATE_TEXT = 'تاريخ اللعب'

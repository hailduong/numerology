import * as Sentry from '@sentry/nextjs'

class SentryLogger {
    submitBirthDay(date: string) {
        Sentry.captureEvent({
            message: `SUBMIT_BIRTHDAY`,
            level: 'info',
            extra: {date}
        })
    }
}
const sentryLogger = new SentryLogger()
export default sentryLogger

import * as Sentry from '@sentry/nextjs'

class SentryLogger {
    submitBirthDay(date: string) {
        Sentry.addBreadcrumb({
            category: 'home',
            message: `SUBMIT_BIRTHDAY`,
            level: 'info',
            data: {date}
        })
    }
}
const sentryLogger = new SentryLogger()
export default sentryLogger

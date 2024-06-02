/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rrbUHPgS7bM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-800 p-8">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">URL Shortener</h1>
        <div className="w-full max-w-md">
          <div className="rounded-md shadow-sm">
            <input
              type="text"
              aria-label="URL input"
              value="https://www.example.com"
              className="block w-full text-lg py-3 px-4 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <Select className="mt-2">
            <SelectTrigger>
              <SelectValue
                placeholder="Select a format"
                className="block w-full text-lg py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="markdown">Markdown</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="plain">Plain Text</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full mt-4 py-2 rounded-b-md">
            Shorten URL
          </Button>
        </div>
        <div className="w-full max-w-md mt-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Shortened URLs</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-1">short.ly/3rFg4</p>
                <p className="text-xs text-gray-500">Clicked 24 times</p>
              </div>
              <Button variant="ghost" size="sm">
                Copy
              </Button>
            </div>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-1">short.ly/7tYh1</p>
                <p className="text-xs text-gray-500">Clicked 67 times</p>
              </div>
              <Button variant="ghost" size="sm">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Notification = () => {
  return (
    <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>

      <div class="flex items-center px-2 py-3">
        <div>image</div>

        <div class="mx-3">
          <p class="text-gray-600 dark:text-gray-200">
            Sara has replied on the{' '}
            <a class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">
              uploaded image
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;

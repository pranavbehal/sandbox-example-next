# Vercel AI SDK v5: Tool Calls

Tool calls in Vercel AI SDK v5 allow language models to interact with external functions to perform actions or fetch information.

## Key Concepts:

1.  **Defining Tools**:
    *   Tools are essentially JavaScript/TypeScript functions that perform a specific task (e.g., fetching weather data, interacting with a database).
    *   Each tool must have a `name`, a `description`, and a ``parameters`` schema (defined using a library like `zod`) that describes the expected arguments for the tool.

2.  **Integrating Tools with the AI Model**:
    *   When using the `useChat` hook (for React/Next.js) or the `stream` function directly (for server-side usage), you pass an array of your defined tools via the `tools` option.
    *   The SDK handles the communication with the AI model, including providing the tool definitions to the model and parsing the model's requests to use a tool.

3.  **Handling Tool Calls**:
    *   When the AI model determines that a tool needs to be called, the SDK provides a mechanism to intercept and handle this.
    *   For `useChat`, this is typically done through the `onToolCall` callback function, which receives the tool's name and arguments.
    *   For server-side `stream`, the streamed output will include `tool_calls` parts.

4.  **Executing Tools and Sending Results Back**:
    *   Inside your `onToolCall` handler (or when processing `tool_calls` from `stream`), you execute the actual tool function with the provided arguments.
    *   After the tool function has executed and produced a result, this result needs to be sent back to the AI model. This is usually done by appending a new message of `role: 'tool'` to the conversation, with the tool's output as the `content`. This allows the AI to use the tool's output to formulate its next response.

## Example (Conceptual using `useChat`):

```typescript
// Define a tool
const getWeatherTool = {
  name: 'getWeather',
  description: 'Gets the current weather for a location.',
  parameters: z.object({
    location: z.string().describe('The city to get the weather for'),
  }),
  execute: async ({ location }) => {
    // In a real app, this would call an external API
    return `The weather in ${location} is sunny with 25°C.`;
  },
};

// In your React component
function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat', // Your API endpoint
    tools: [getWeatherTool],
    onToolCall: async ({ call, appendToolCallMessage, appendData }) => {
      if (call.type === 'tool_call' && call.name === 'getWeather') {
        const result = await getWeatherTool.execute(call.parameters);
        appendToolCallMessage(call, result); // Send tool result back to the AI
      }
    },
  });

  // ... rest of your component rendering
}
```

This conceptual example illustrates the flow: define the tool, pass it to `useChat`, handle the `onToolCall` event to execute the tool, and then feed the tool's output back to the model.

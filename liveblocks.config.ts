"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { Color, Layer } from "./types/canvas";

// liveblocks.config.ts

// 1. Set up the client with your Liveblocks configuration.
// Replace the commented values with your own.
// Official guidance: you can generate this with `npx create-liveblocks-app@latest --init` :contentReference[oaicite:0]{index=0}

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth",
}); // publicApiKey: "pk_prod_xxxx…",        // For quick prototyping or client-only apps
// authEndpoint: "/api/liveblocks-auth",  // For secured access via your backend
// throttle: 100,                         // Optional: rate-limit updates

// 2. Define your custom types.
// Presence: real-time, per-user temporary state (e.g., live cursor)
// Storage: persisted shared state across all users (LiveMap, LiveList, LiveObject)
// UserMeta: static user info (e.g., name, avatar)
// RoomEvent: custom events you broadcast within the room
type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {};

// 3. Create room context with hooks bound to your types
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);

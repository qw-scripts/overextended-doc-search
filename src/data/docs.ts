interface Docs {
  [key: string]: Doc[];
}

interface Doc {
  name: string;
  uri: string;
}

export const docs: Docs = {
  ox_core: [
    {
      name: "Getting Started",
      uri: "https://overextended.github.io/docs/ox_core/",
    },
    {
      name: "Concepts",
      uri: "https://overextended.github.io/docs/ox_core/Getting%20Started/concepts",
    },
    {
      name: "Config",
      uri: "https://overextended.github.io/docs/ox_core/Getting%20Started/config",
    },
    {
      name: "Importing Core Functions",
      uri: "https://overextended.github.io/docs/ox_core/Getting%20Started/imports",
    },
    {
      name: "Player (Client)",
      uri: "https://overextended.github.io/docs/ox_core/Player/Client/",
    },
    {
      name: "Player (Client): Callbacks",
      uri: "https://overextended.github.io/docs/ox_core/Player/Client/callbacks",
    },
    {
      name: "Player (Client): Events",
      uri: "https://overextended.github.io/docs/ox_core/Player/Client/events",
    },
    {
      name: "Player (Server)",
      uri: "https://overextended.github.io/docs/ox_core/Player/Server/",
    },
    {
      name: "Player (Server): Events",
      uri: "https://overextended.github.io/docs/ox_core/Player/Server/events",
    },
    {
      name: "Player (Server): Methods",
      uri: "https://overextended.github.io/docs/ox_core/Player/Server/methods",
    },
    {
      name: "Vehicle (Server)",
      uri: "https://overextended.github.io/docs/ox_core/Vehicle/Server/",
    },
    {
      name: "Vehicle (Server): Callbacks",
      uri: "https://overextended.github.io/docs/ox_core/Vehicle/Server/callbacks",
    },
    {
      name: "Vehicle (Server): Methods",
      uri: "https://overextended.github.io/docs/ox_core/Vehicle/Server/methods",
    },
  ],
  oxmysql: [
    {
      name: "Getting Started",
      uri: "https://overextended.github.io/docs/oxmysql",
    },
    {
      name: "Benchmark",
      uri: "https://overextended.github.io/docs/oxmysql/Getting%20Started/benchmark",
    },
    {
      name: "Common Issues",
      uri: "https://overextended.github.io/docs/oxmysql/Getting%20Started/issues",
    },
    {
      name: "Placeholders",
      uri: "https://overextended.github.io/docs/oxmysql/Getting%20Started/placeholders",
    },
    {
      name: "Usage",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/",
    },
    {
      name: "Usage: Insert",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/insert",
    },
    {
      name: "Usage: Prepare",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/prepare",
    },
    {
      name: "Usage: Query",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/query",
    },
    {
      name: "Usage: Scalars",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/scalar",
    },
    {
      name: "Usage: Single",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/single",
    },
    {
      name: "Usage: Transactions",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/transaction",
    },
    {
      name: "Usage: Update",
      uri: "https://overextended.github.io/docs/oxmysql/Usage/update",
    },
  ],
  ox_target: [
    {
      name: "Getting Started",
      uri: "https://overextended.github.io/docs/ox_target/",
    },
    {
      name: "Config",
      uri: "https://overextended.github.io/docs/ox_target/Getting%20Started/config",
    },
    {
      name: "Usage",
      uri: "https://overextended.github.io/docs/ox_target/Usage/",
    },
    {
      name: "Usage: Globals",
      uri: "https://overextended.github.io/docs/ox_target/Usage/Globals",
    },
    {
      name: "Usage: Target",
      uri: "https://overextended.github.io/docs/ox_target/Usage/Target",
    },
    {
      name: "Usage: Zones",
      uri: "https://overextended.github.io/docs/ox_target/Usage/Zones",
    },
  ],
  ox_lib: [
    {
      name: "Getting Started",
      uri: "https://overextended.github.io/docs/ox_lib/",
    },
    {
      name: "ACL",
      uri: "https://overextended.github.io/docs/ox_lib/ACL/Server",
    },
    {
      name: "AddCommand",
      uri: "https://overextended.github.io/docs/ox_lib/AddCommand/Server",
    },
    {
      name: "AddKeybind",
      uri: "https://overextended.github.io/docs/ox_lib/AddKeybind/Client",
    },
    {
      name: "Cache",
      uri: "https://overextended.github.io/docs/ox_lib/Cache/Client",
    },
    {
      name: "Callbacks (JS): Client",
      uri: "https://overextended.github.io/docs/ox_lib/Callback/JavaScript/Client",
    },
    {
      name: "Callbacks (JS): Server",
      uri: "https://overextended.github.io/docs/ox_lib/Callback/JavaScript/Server",
    },
    {
      name: "Callbacks (Lua): Client",
      uri: "https://overextended.github.io/docs/ox_lib/Callback/Lua/Client",
    },
    {
      name: "Callbacks (Lua): Server",
      uri: "https://overextended.github.io/docs/ox_lib/Callback/Lua/Server",
    },
    {
      name: "DiableControls",
      uri: "https://overextended.github.io/docs/ox_lib/DisableControls/Client",
    },
    {
      name: "GetClosestPlayer",
      uri: "https://overextended.github.io/docs/ox_lib/DisableControls/Client",
    },
    {
      name: "GetClosestVehicle",
      uri: "https://overextended.github.io/docs/ox_lib/GetClosestVehicle/Client",
    },
    {
      name: "GetNearbyPlayers",
      uri: "https://overextended.github.io/docs/ox_lib/GetNearbyPlayers/Client",
    },
    {
      name: "GetNearbyVehicles",
      uri: "https://overextended.github.io/docs/ox_lib/GetNearbyVehicles/Client",
    },
    {
      name: "Interface: Alert Dialog",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/alert",
    },
    {
      name: "Interface: Clipboard",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/clipboard",
    },
    {
      name: "Interface: Context Menu",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/context",
    },
    {
      name: "Interface: Input Dialog",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/input",
    },
    {
      name: "Interface: Menu",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/menu",
    },
    {
      name: "Interface: Notifications",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/notify",
    },
    {
      name: "Interface: Progress",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/progress",
    },
    {
      name: "Interface: Skill Check",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/skillcheck",
    },
    {
      name: "Interface: TextUI",
      uri: "https://overextended.github.io/docs/ox_lib/Interface/Client/textui",
    },
    {
      name: "Locale (Shared)",
      uri: "https://overextended.github.io/docs/ox_lib/Locale/Shared",
    },
    {
      name: "Logger",
      uri: "https://overextended.github.io/docs/ox_lib/Logger/Server",
    },
    {
      name: "Points",
      uri: "https://overextended.github.io/docs/ox_lib/Points/Client",
    },
    {
      name: "Raycast",
      uri: "https://overextended.github.io/docs/ox_lib/Raycast/Client",
    },
    {
      name: "Streaming",
      uri: "https://overextended.github.io/docs/ox_lib/Streaming/Client",
    },
    {
      name: "Vehicle Properties",
      uri: "https://overextended.github.io/docs/ox_lib/VehicleProperties/Client",
    },
    {
      name: "Version (Server)",
      uri: "https://overextended.github.io/docs/ox_lib/Version/Server",
    },
    {
      name: "Version (Shared)",
      uri: "https://overextended.github.io/docs/ox_lib/Version/Shared",
    },
    {
      name: "Zones",
      uri: "https://overextended.github.io/docs/ox_lib/Zones/Client",
    },
  ],
  ox_inventory: [
    {
      name: "Getting Started",
      uri: "https://overextended.github.io/docs/ox_inventory",
    },
    {
      name: "Common Issues",
      uri: "https://overextended.github.io/docs/ox_inventory/Getting%20Started/issues",
    },
    {
      name: "Configuration",
      uri: "https://overextended.github.io/docs/ox_inventory/Getting%20Started/config",
    },
    {
      name: "ESX Support",
      uri: "https://overextended.github.io/docs/ox_inventory/Getting%20Started/esx",
    },
    {
      name: "QBCore Support",
      uri: "https://overextended.github.io/docs/ox_inventory/Getting%20Started/qb",
    },
    {
      name: "Functions (Client/Inventory) Search",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Inventory/Search",
    },
    {
      name: "Functions (Client) Items",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Items",
    },
    {
      name: "Functions (Client/Statebags) invBusy",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Statebags/invBusy",
    },
    {
      name: "Functions (Client/Statebags) invHotkeys",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Statebags/invHotkeys",
    },
    {
      name: "Functions (Client/Statebags) invOpen",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Statebags/invOpen",
    },
    {
      name: "Functions (Client/Utils) weaponWheel",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/Utils/weaponWheel",
    },
    {
      name: "Functions (Client) Display Metadata",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/displayMetadata",
    },
    {
      name: "Functions (Client) Get Current Weapon",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/getCurrentWeapon",
    },
    {
      name: "Functions (Client) openInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/openInventory",
    },
    {
      name: "Functions (Client) openNearbyInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/openNearbyInventory",
    },
    {
      name: "Functions (Client) setStashTarget",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/setStashTarget",
    },
    {
      name: "Functions (Client) useItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/useItem",
    },
    {
      name: "Functions (Client) useSlot",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Client/useSlot",
    },
    {
      name: "Functions (Server) Event Hooks",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Hooks",
    },
    {
      name: "Functions (Server/Inventory) AddItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/AddItem",
    },
    {
      name: "Functions (Server/Inventory) CanCarryAmount",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CanCarryAmount",
    },
    {
      name: "Functions (Server/Inventory) CanCarryItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CanCarryItem",
    },
    {
      name: "Functions (Server/Inventory) CanCarryWeight",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CanCarryWeight",
    },
    {
      name: "Functions (Server/Inventory) CanSwapItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CanSwapItem",
    },
    {
      name: "Functions (Server/Inventory) ClearInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/ClearInventory",
    },
    {
      name: "Functions (Server/Inventory) ConfiscateInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/ConfiscateInventory",
    },
    {
      name: "Functions (Server/Inventory) ConvertItems",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/ConvertItems",
    },
    {
      name: "Functions (Server/Inventory) CreateTemporaryStash",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CreateTemporaryStash",
    },
    {
      name: "Functions (Server/Inventory) CustomDrop",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/CustomDrop",
    },
    {
      name: "Functions (Server/Inventory) GetCurrentWeapon",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetCurrentWeapon",
    },
    {
      name: "Functions (Server/Inventory) GetInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetInventory",
    },
    {
      name: "Functions (Server/Inventory) GetInventoryItems",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetInventoryItems",
    },
    {
      name: "Functions (Server/Inventory) GetItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetItem",
    },
    {
      name: "Functions (Server/Inventory) GetItemSlots",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetItemSlots",
    },
    {
      name: "Functions (Server/Inventory) GetSlot",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/GetSlot",
    },
    {
      name: "Functions (Server/Inventory) RegisterStash",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/RegisterStash",
    },
    {
      name: "Functions (Server/Inventory) RemoveItem",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/RemoveItem",
    },
    {
      name: "Functions (Server/Inventory) ReturnInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/ReturnInventory",
    },
    {
      name: "Functions (Server/Inventory) Search",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/Search",
    },
    {
      name: "Functions (Server/Inventory) SetDurability",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/SetDurability",
    },
    {
      name: "Functions (Server/Inventory) SetMaxWeight",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/SetMaxWeight",
    },
    {
      name: "Functions (Server/Inventory) SetMetadata",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/SetMetadata",
    },
    {
      name: "Functions (Server/Inventory) SetSlotCount",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/SetSlotCount",
    },
    {
      name: "Functions (Server/Inventory) SwapSlots",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Inventory/SwapSlots",
    },
    {
      name: "Functions (Server) Items",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/Items",
    },
    {
      name: "Functions (Server) SetPlayerInventory",
      uri: "https://overextended.github.io/docs/ox_inventory/Functions/Server/setPlayerInventory",
    },
  ],
};

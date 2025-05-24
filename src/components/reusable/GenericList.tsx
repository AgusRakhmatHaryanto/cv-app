"use client";

import { WithId, ListActions } from "@/types/cv";

type ListProps<T> = {
  items: WithId<T>[];
  renderItem: (item: WithId<T>) => React.ReactNode;
  actions?: ListActions<T>;
  emptyMessage?: string;
  className?: string;
  itemClassName?: string;
};

export function GenericList<T>({
  items,
  renderItem,
  actions,
  emptyMessage = "No items found",
  className = "space-y-4",
  itemClassName = "p-4 border rounded-lg",
}: ListProps<T>) {
  if (items.length === 0) {
    return <div className="text-center py-8 text-gray-500">{emptyMessage}</div>;
  }

  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id} className={itemClassName}>
          <div className="flex justify-between items-start">
            <div className="flex-1">{renderItem(item)}</div>

            {actions && (
              <div className="flex gap-2 ml-4">
                {actions.onEdit && (
                  <button
                    onClick={() => actions.onEdit?.(item)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                )}

                {actions.onDelete && (
                  <button
                    onClick={() => actions.onDelete?.(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                )}

                {actions.customActions?.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => action.handler(item)}
                    className={`px-3 py-1 rounded transition ${
                      action.className ||
                      "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
